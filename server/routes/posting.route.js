import express from 'express'
import {get} from '../controllers/posting.controller.js'

const router = express.Router()

router.get('/', get)

export const postingRoutes = router