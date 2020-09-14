import {Request, Response, NextFunction} from 'express'
import db from '../database/connection'


interface GAME {
    id: number,
    title: string,
    platform: ['XBOX', 'PLAYSTATION', 'PC'],
    genre_id: number
}

export const getAllGames = async (request:Request, response: Response, next: NextFunction) => {

    try {
        const allGames = await db<GAME>('GAME').select('title', 'id', 'platform')
    
        return response.status(200).json({
            status: 'success',
            data : allGames
        })
    } catch(error) {
        return response.status(400).json({
            status: 'fail',
            message: error.message
        })
    }

}