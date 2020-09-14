import express from 'express'
// Controladores
import { getAllGames } from '../controllers/gamesController'

const router = express.Router()


// /games
router.route('/').get(getAllGames )


export default router