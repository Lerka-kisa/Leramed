const Router = require('express')
const router = new Router()
const analysisRouter = require('./analysisRouter')
const authRouter = require('./authRouter')
const userinfoRouter = require('./userinfoRouter')
const medcardsRouter = require('./medcardsRoutes')
const doctorsRouter = require('./doctorsRouter')
const timetableRouter = require('./timetableRouter')

router.use('/auth', authRouter)
router.use('/analysis', analysisRouter)
router.use('/userinfo', userinfoRouter)
router.use('/medcards', medcardsRouter)
router.use('/doctors', doctorsRouter)
router.use('/timetable', timetableRouter)

module.exports = router