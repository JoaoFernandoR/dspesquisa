import {Request, Response, NextFunction} from 'express'
import db from '../database/connection'

interface GAME {
    id: number,
    title: string,
    platform: ['XBOX', 'PLAYSTATION', 'PC'],
    genre_id: number
}

interface RECORD {
    id: number,
    name: string,
    age: number,
    moment: Date,
    game_id: number
}

export const getAllRecords = async (request:Request, response:Response, next: NextFunction) => {

    try {
        const queryCopy = {...request.query}

        let query = db<RECORD>('RECORD').select()

        // Sort the query, desc, asc
        if(queryCopy.orderBy && queryCopy.direction) {
            query.orderBy(queryCopy.orderBy as string, queryCopy.direction as string)
        }

        // Page the query
        if(queryCopy.linesPerPage && queryCopy.page) {
            const page = (request.query.page as any) * 1 || 1
            const limit = (request.query.linesPerPage as any) * 1 || 100
    
            const skip = (page - 1) * limit
            query.limit(limit).offset(skip)
        }

        // Show from min Date to max Date
        if(queryCopy.min && queryCopy.max) {
            query.where('moment', '>=', queryCopy.min as string).where('moment' as any, '<=', queryCopy.max as string)
        }


        const result = await query

        return response.status(200).json({
            status: 'success',
            results: result.length,
            message: result
        })


    } catch(error) {
        return response.status(400).json({
            status: 'failure',
            message: error.message
        })
    }
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

