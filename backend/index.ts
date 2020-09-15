import express from 'express'
// Rotas 
import gameRoutes from './src/routes/gameRoutes'
import recordRoutes from './src/routes/recordRoutes'

const app = express()

app.use(express.json())

// Rotas
app.use('/games', gameRoutes)
app.use('/record', recordRoutes)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`Connected to the port ${PORT}`))