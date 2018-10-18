import express from 'express'
import {get} from '../controllers/operation.controller.js'

const router = express.Router()

router.get('/', get)

export const operationRoutes = router