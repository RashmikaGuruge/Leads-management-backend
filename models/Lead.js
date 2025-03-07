const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please enter a valid email address'] 
    },
    status: {
        type: String,
        enum: ["New", "Engaged", "Proposal Sent", "Closed-Won", "Closed-Lost"],
        default: "New",
    },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Lead", LeadSchema);
