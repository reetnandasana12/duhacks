const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema({
    
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    own_id: { type: String, required: true },
    user_id: { type: String, required: true },
    booking_date: { type: String, required: true },
    booking_time: { type: String, required: true },
    status: { type: String, required: true , default:0},
    reject: { type: String, required: true , default:0 },

},{timestamps:true});

const bookingdb = new mongoose.model("booking",bookingSchema);

module.exports = bookingdb;