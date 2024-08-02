const express = require('express')
const cafe = express.Router()

const { displayAllCafes, displayOneCafe, addNewCafe } = require('../queries/cafes')

cafe.get('/', async (req,res)=> {
    const allCafes = await displayAllCafes();
    if(allCafes[0]){
        res.status(200).json(allCafes)
    } else {
        res.status(500).json({error:"Internal Server Error or Something"})
    }
})

cafe.get('/:id', async (req,res)=>{
    const { id } = req.params;
    const oneCafe = await displayOneCafe(id)
    if(oneCafe.id){
        res.status(200).json(oneCafe)
    } else {
        res.status(404).json({error: "Unable to find Cafe"})
    }

})


module.exports = cafe;
