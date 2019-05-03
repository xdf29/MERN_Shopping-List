const express = require("express")
const router = express.Router()
const Item = require("../../models/Item")

// @route GET /api/items/
// @desc Get all items
// @access Public
router.get("/", (req, res) => {
    Item.find()
        .sort({date:-1})
        .then(items => res.json(items))
})

// @route POST /api/items/
// @desc Create an items
// @access Public
router.post("/", (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
        .then(item => res.json(item))
})

// @route DELETE /api/items/:id
// @desc Delete an items
// @access Public
router.delete("/:id", (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.delete(), res.json({success:true}))
        .catch(() => {res.status(404).json({success:false})})
})

module.exports = router