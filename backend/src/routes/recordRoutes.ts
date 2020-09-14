import express from 'express'
// Controladores
import { createRecord } from '../controllers/recordControllers'

const router = express.Router()


// /record
router.route('/').post(createRecord)


export default router