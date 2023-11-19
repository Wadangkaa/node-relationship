import express from 'express'
import cors from 'cors'
import oneToOneRouter from './routes/one-to-one-route.js'
import oneToOneRelationalRouter from './routes/one-to-one-relational-route.js'

const { PORT } = process.env

const app = express()

app.use(express.json())
app.use(cors())

app.use('/one-to-one', oneToOneRouter)
app.use('/one-to-one/re', oneToOneRelationalRouter)

export default app
