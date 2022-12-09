const Router = require('express')
const router = new Router()
const analysisRouter = require('./analysisRouter')
const authRouter = require('./authRouter')
const ticketsRouter = require('./ticketsRouter')

router.use('/auth', authRouter)
router.use('/analysis', analysisRouter)
router.use('/tickets', ticketsRouter)

module.exports = router