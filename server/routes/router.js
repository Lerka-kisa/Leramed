const Router = require('express')
const router = new Router()
const analysisRouter = require('./analysisRouter')
const authRouter = require('./authRouter')
const ticketsRouter = require('./ticketsRouter')
const userinfoRouter = require('./userinfoRouter')
const medcardsRouter = require('./medcardsRoutes')
const doctorsRouter = require('./doctorsRouter')

router.use('/auth', authRouter)
router.use('/analysis', analysisRouter)
router.use('/tickets', ticketsRouter)
router.use('/userinfo', userinfoRouter)
router.use('/medcards', medcardsRouter)
router.use('/doctors', doctorsRouter)

module.exports = router