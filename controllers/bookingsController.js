const Booking = require("../models/bookingsModel");

const postBooking = async (request, response) => {
  const { userId, service, timeSlot, location } = request.body;
  const booking = { userId, service, timeSlot, location };
  const newBooking = new Booking(booking);
  try {
    
    const newBooking = new Booking(booking);
    
    await newBooking.save();
    response.status(201).json({ message: "Successfully Posted Booking", data: newBooking });
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error });
  }
};
const getBookingsOfUser = (userId) => {
    try {
      const bookingsOfUser = Booking.find({ userId: userId });
  
      return bookingsOfUser;
    } catch (error) {
      throw new Error(`Error fetching bookings for user ${userId}: ${error.message}`);
    }
  
};

module.exports = {
  postBooking,
  getBookingsOfUser
};
