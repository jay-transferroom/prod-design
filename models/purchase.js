mongoose = require("mongoose");

var purchaseSchema = new mongoose.Schema({
    userType: String,
    studentDob: String,
    country: String,
    name_on_card: String,
    card_number: String,
    expiry: String,
    email1: String,
    promo: String,
    course: String,
    studentEmail: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Purchase", purchaseSchema);