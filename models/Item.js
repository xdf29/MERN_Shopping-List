const mongoose = require("mongoose")
const schema = mongoose.Schema

const ItemSchema = new schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Item = mongoose.model("Item", ItemSchema)

module.exports = Item