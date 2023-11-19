import express from 'express'
import cors from 'cors'
import oneToOneRouter from './routes/one-to-one-route.js'
import oneToOneRelationalRouter from './routes/one-to-one-relational-route.js'
import oneToManyRouter from './routes/one-to-many-route.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/one-to-one', oneToOneRouter)
app.use('/one-to-one/re', oneToOneRelationalRouter)

app.use('/one-to-many', oneToManyRouter)

export default app
