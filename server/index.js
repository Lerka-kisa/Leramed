require('dotenv').config();
const express = require('express')
const app = express();

const cors = require('cors');
app.use(cors());

// const https = require('https');
const fs = require('fs');

// const options = {
//     key: fs.readFileSync('security/certificates/RS-LeroMed-RSA.key'),
//     cert: fs.readFileSync('security/certificates/RS-LeroMed.crt')
// };

// let server = https.createServer(options, app)

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const cookieParser = require('cookie-parser');
app.use(cookieParser("cookie_key"));

const {sequelize} = require('./DB')
const model = require('./models/models');

const PORT = process.env.PORT || 5000;

const router = require("./routes/router");
app.use('/api', router)

const {GetAbilityFor} = require("./security/privilegies");
const {accessKey} = require("./security/jwtKeys");
const {Guest} = require("./security/roles");
const jwt = require("jsonwebtoken");


app.use((req, res, next) => {
    if (req.cookies.accessToken) {
        jwt.verify(req.cookies.accessToken, accessKey, (err, payload) => {
            if (err) {
                res.clearCookie('accessToken');
                res.redirect('/auth/login');
            }
            req.payload = payload;
        });
    }else {
        req.payload = {role : Guest};
    }
    req.ability = GetAbilityFor(req);
    next();
});

const start = async ()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync()

        //server.listen(PORT, () => console.log(`https://localhost:${PORT}/auth/login`));
        app.listen(PORT, () => console.log(`http://localhost:${PORT}/auth/login`));
    }catch(e) {
        console.log(e)
    }
}

start();

app.get('/resource', (req, res) =>
{
    if (req.payload)
        res.status(200).send(`Resource ${req.payload.id}-${req.payload.login}-${req.payload.role}`);
    else
        res.status(401).send('To access the resource, you need to log in');
});

