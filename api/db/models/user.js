const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    picture: { type: String, required: true },
    reading: [
        {
            book_info: {
                title: String,
                subtitle: String,
                authors: [ String ],
                cover: String,
                amount_pages: Number
            },
            start_date: { type: Date, default: Date.now },
            current_page: { type: Number, default: 0 },
            rating: { type: Number, default: 0 },
            comment: { type: String, default: "" }
        }
    ],
});

module.exports = mongoose.model('users', userSchema);

