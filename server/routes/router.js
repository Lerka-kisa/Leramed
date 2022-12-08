const Router = require('express')
const router = new Router()
const analysisRouter = require('./analysisRouter')
const authRouter = require('./authRouter')

router.use('/auth', authRouter)
router.use('/analysis', analysisRouter)

module.exports = router