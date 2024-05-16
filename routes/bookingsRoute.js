const {postBooking}=require('../controllers/bookingsController')
const express=require('express')
const router=express.Router()

router.post('/postBooking',postBooking)
router.get('/postBooking',(request,response)=>{
    try {
        response.send('postBooking')
    } catch (error) {
        console.log(error)
    }
})

module.exports=router