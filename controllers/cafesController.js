const express = require('express')
const cafe = express.Router()

const { displayAllCafes, displayOneCafe, addNewCafe, updateCafe, removeCafe } = require('../queries/cafes')

cafe.get('/', async (req,res)=> {
    const allCafes = await displayAllCafes();
    if(allCafes[0]){
        res.status(200).json(allCafes)
    } else {
        res.status(500).json({error:"Internal Server Error or Something"})
    }
})

cafe.get('/:id', async (req,res) => {
    const { id } = req.params;
    const oneCafe = await displayOneCafe(id)
    if(oneCafe.id){
        res.status(200).json(oneCafe)
    } else {
        res.status(404).json({error: "Unable to find Cafe"})
    }

})

cafe.post('/', async (req,res) => {
    try {
        const newCafeEntry = await addNewCafe(req.body)
        res.status(201).json(newCafeEntry)
    }catch(error){
        return error
    }
})

cafe.put('/:id', async ( req,res ) => {
    const { id } = req.params
    const updatingCafe = await updateCafe(id,req.body)
        if(updatingCafe.id){
            res.status(200).json(updatingCafe)
        } else {
            res.status(404).json({error: "Update Submission Unsuccessful!"})
        }

        
    })
cafe.delete('/:id', async (req,res) => {
    const { id } = req.params
    const removingCafe = await removeCafe(id)

    if(removingCafe.id) {
        res.status(200).json({message: "Cafe Successfully Deleted!" })
    } else {
        res.status(400).json({error: "An Error occurred when deleting Cafe!"})
    }

})




module.exports = cafe;
