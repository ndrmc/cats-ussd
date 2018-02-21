import express from 'express'
import operationCtrl from '../controllers/operation.controller.js'

const router = express.Router()

router.get('/', operationCtrl.get)

export default router