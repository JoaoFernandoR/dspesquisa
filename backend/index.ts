import express from 'express'
// Rotas 
import gameRoutes from './src/routes/gameRoutes'

const app = express()

// Rotas
app.use('/games', gameRoutes)



app.listen(3333, () => console.log('Connected to the server...'))