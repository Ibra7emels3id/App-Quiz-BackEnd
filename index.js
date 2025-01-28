const express = require('express')
const Connectdb = require('./context/connectdb')
const app = express()
require('dotenv').config();
const cors = require('cors');
const UserRouterCLient = require('./routes/UserRouter');
const QuestionRouter = require('./routes/QuestionRouter');
const ScoreRouterCLient = require('./routes/ScoreRouter');
const port = process.env.URL || 9000


// Connected to mongodb server
Connectdb()

// server configuration settings for express
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Origin', 'Accept', 'X-Custom-Header'],
    credentials: true
}))

// use express
app.use(express())

// parse application/json
app.use(express.json())


// Add Router
app.use('/api' , UserRouterCLient)
app.use('/api' , QuestionRouter)
app.use('/api' , ScoreRouterCLient)



// get path to server
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// get Port App Server
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})