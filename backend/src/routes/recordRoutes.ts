import express from 'express'
// Controladores
import { createRecord, getAllRecords } from '../controllers/recordControllers'

const router = express.Router()


// /record
router.route('/')
.post(createRecord)
.get(getAllRecords)


export default router