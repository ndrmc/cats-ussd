import express from 'express'
import {get} from '../controllers/bid.controller.js'

const router = express.Router()

router.get('/', get)

export const bidRoutes = router