const express = require('express')
const blogger = express.Router()

const { getAllBloggers,getOneBlogger,createNewBlogger,removeBloggerEntry } = require('../queries/blogger')

blogger.get('/', async (req, res) => {
    const allBloggers = await getAllBloggers()
    if(allBloggers[0]) {
        res.status(200).json(allBloggers)
    } else {
        res.status(500).json({error:"No Bloggers Found"})
    }
})

blogger.get('/:id', async (req,res) => {
    const { id } = req.params;
    const oneBlogger = await getOneBlogger(id)
    if(oneBlogger.id){
        res.status(200).json(oneBlogger)
    }else{
        res.status(404).json({ error: "Blogger Not Found!" })
    }
})

module.exports = blogger;