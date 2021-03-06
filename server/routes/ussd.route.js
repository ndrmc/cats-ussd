import express from 'express'
import validate from 'express-validation'
import ussdCtrl from '../controllers/ussd.controller.js'

const router = express.Router()

router.route('/')
  .post(ussdCtrl.start)

router.route('/dispatch')
  .get(ussdCtrl.getDispatch)

router.route('/dispatch-proxy')
  .get(ussdCtrl.getDispatchProxy)

router.route('/received')
  .post(ussdCtrl.received)

export default router
