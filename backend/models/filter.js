const mongoose = require("mongoose");

const filter = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Please provide name"],
        trim: true,
    },
    type: {
        type: String,
        required: [true, "Please provide type"],
        enum:{
            values:['IMAGE_AD','VIDEO_AD'],
            message:'type is either : IMAGE_AD, VIDEO_AD'
        }
    },
    content_url: {
        type: String,
        trim: true,
        required: [true, "Please provide content_url"],
    },
    headline: {
        type: String,
        trim: true,
        maxlength:[30,'a tour name must have less or equal than 30 characters'],
    },
    primary_text: {
        type: String,
        trim: true,
        maxlength:[120,'a tour name must have less or equal than 120 characters'],
    },
    destination_url: {
        type: String,
        required: [true, "Question must have an destination_url"],
        trim: true,
    },
    meta_data: {
        type: {String},
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
    updateAt: {
        type: Date,
    },
});



const Filter = mongoose.model("Filter", filter);

module.exports = Filter;
