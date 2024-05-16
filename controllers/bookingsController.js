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

module.exports = {
  postBooking,
};
