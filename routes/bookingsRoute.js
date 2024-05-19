const {postBooking,getBookingsOfUser}=require('../controllers/bookingsController')
const express=require('express')
const router=express.Router()

router.post('/postBooking',postBooking)
router.get('/getBookingsOfUser/:userId', async (request, response) => {
    const userId = request.params.userId;
  
    try {
      const bookings = await getBookingsOfUser(userId); 
  
      if (!bookings) {
        return response.status(404).json({ message: 'Bookings not found' });
      }
  
      response.status(200).json(bookings);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      response.status(500).json({ message: 'Internal server error', error: error.message });
    }
  });
  

module.exports=router