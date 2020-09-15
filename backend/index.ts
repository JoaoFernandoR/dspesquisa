import express from 'express'
// Rotas 
import gameRoutes from './src/routes/gameRoutes'
import recordRoutes from './src/routes/recordRoutes'
import initialRoute from './src/routes/initialRoute'

const app = express()

app.use(express.json())

// Rotas
app.use('/', initialRoute)
app.use('/games', gameRoutes)
app.use('/record', recordRoutes)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`Connected to the port ${PORT}`))