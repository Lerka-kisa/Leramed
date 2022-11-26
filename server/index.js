require('dotenv').config();
const express = require('express')
const app = express();

const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('sequrity(https)/RS-LeroMed-RSA.key'),
    cert: fs.readFileSync('sequrity(https)/RS-LeroMed.crt')
};

let server = https.createServer(options, app)

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const cookieParser = require('cookie-parser');
app.use(cookieParser("cookie_key"));

const {sequelize} = require('./DB')
const model = require('./models/models');

const PORT = process.env.PORT || 5000;

const authRouter = require("./routes/auth");
app.use("/auth", authRouter);




const start = async ()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync()
        server.listen(PORT, () => console.log(`https://localhost:${PORT}/auth/login`));
    }catch(e) {
        console.log(e)
    }
}
start();
