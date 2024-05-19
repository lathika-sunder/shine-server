const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    timeSlot: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    
});
module.exports = mongoose.model('Booking', bookingSchema);


