
const mongoose = require('mongoose');
const Schema = mongoose.Schema;




// Create Schema
const TechSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    totalSales: {
        type: Number,
        required: true,
        default: 0.00
    },
    totalJobs: {
        type: Number,
        required: true,
        default: 0
    },
    jobsSold: {
        type: Number,
        required: true,
        default: 0
    },
    jobOpp: {
        type: Number,
        required: true,
        default: 0
    }


});



module.exports = Tech = mongoose.model('tech', TechSchema);