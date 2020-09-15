import express from 'express'
// Controladores
import { createRecord, getAllRecords, deleteRecord } from '../controllers/recordControllers'

const router = express.Router()


// /record
router.route('/')
.post(createRecord)
.get(getAllRecords)

router.route('/:id')
.delete(deleteRecord)

export default router