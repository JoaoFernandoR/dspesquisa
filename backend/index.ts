import express from 'express'
// Rotas 
import gameRoutes from './src/routes/gameRoutes'
import recordRoutes from './src/routes/recordRoutes'

const app = express()

app.use(express.json())

// Rotas
app.use('/games', gameRoutes)
app.use('/record', recordRoutes)


app.listen(3333, () => console.log('Connected to the server...'))