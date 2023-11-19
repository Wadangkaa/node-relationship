import express from 'express'
import { index, store } from '../controllers/one-to-many-controller.js'

const router = express.Router()

router.get('/', index)
router.get('/create', store)

export default router
