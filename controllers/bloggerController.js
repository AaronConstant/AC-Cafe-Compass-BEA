const express = require('express')
const blogger = express.Router()

const { getAllBloggers,getOneBlogger,createNewBlogger,updateBlogger, removeBloggerEntry} = require('../queries/blogger')

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

blogger.post('/', async (req,res)=> {
    try{
        const newBlogger = await createNewBlogger(req.body)
        res.status(201).json(newBlogger)
    }catch(error){
        res.status(400).json(error.message)
    }
})

blogger.put('/:id', async (req,res) => {
    const { id } = req.params;
    const updatingBlogger = await updateBlogger(id,req.body)

    if(updatingBlogger.id){
        res.status(200).json(updatingBlogger)
    } else {
        res.status(404).json({error: "Was not able to update Blogger with specific ID, Try again."})

    }
    
})

blogger.delete('/:id', async (req,res) => {
    const { id } = req.params;
    const removeBlog = await removeBloggerEntry(id)

    if(removeBlog.id) {
        res.status(200).json({message: "Blogger Successfully Deleted!" })
    } else {
        res.status(400).json({error: "An Error occurred when deleting blogger!"})
    }

})




module.exports = blogger;