const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const bloggerController = require('./controllers/bloggerController')
const cafesController = require('./controllers/cafesController')
const reviewsController = require('./controllers/reviewsController')
// Middleware 
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

app.get('/', (req,res)=> {
    res.send('Welcome to Cafe Compass App!')
})

app.use('/bloggers', bloggerController )
app.use('/cafes', cafesController)
app.use('/reviews', reviewsController) 



app.get("*", (req,res)=> {
    res.status(404).send("Page not Found!")
})


module.exports = app;