import {Request, Response, NextFunction} from 'express'
import db from '../database/connection'

interface GAME {
    id: number,
    title: string,
    platform: ['XBOX', 'PLAYSTATION', 'PC'],
    genre_id: number
}

export const createRecord = async (request:Request, response: Response, next: NextFunction) => {

    const trx = await db.transaction();

    try {
    
        const idOfRecord = await trx('RECORD').insert({
            name: request.body.name,
            age: request.body.age,
            game_id: request.body.game_id
        })

        const game = await trx<GAME>('GAME').where('id', request.body.game_id)

        const user = await trx('RECORD').where('id', idOfRecord)

        const genre = await trx('GENRE').where('id', request.body.game_id)

        
        await trx.commit();  
        
        return response.status(201).json({
            status: 'success',
            data : {
                id: idOfRecord[0],
                moment: user[0].moment,
                name: user[0].name,
                age: user[0].id,
                gameTitle: game[0].title,
                gamePlatform: game[0].platform,
                genreName: genre[0].name
            }
        })

    } catch(error) {

        await trx.rollback()                    
        
        return response.status(400).json({
            status: 'fail',
            message: error.message
        })
        
    }


}