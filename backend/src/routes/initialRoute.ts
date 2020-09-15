import express, {Response, Request} from 'express'

const route = express.Router()



route.route('/').get((req:Request, res:Response) => {
    res.send('<h1> Welcome to Game Survey Server </h1>')
})




export default route