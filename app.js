const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')


// Middleware 
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

app.get('/', (req,res)=> {
    res.send('Welcome to Tuner App!')
})

app.use('/customer', customerController )
app.use('/cafes', cafesController)



app.get("*", (req,res)=> {
    res.status(404).send("Page not Found!")
})


module.exports = app;