const router = require("express").Router();
const { Trip, Item } = require("../../models");


router.post('/', async (req, res) => {
    try {
    const itemData = await Item.create({
        item_title: req.body.item_title,
        item_description: req.body.item_description,
        date_needby: req.body.date_needby,
        completion: req.body.completion,
        trip_id: req.body.trip_id,
    })
    res.status(200).json(itemData);} catch (err) {
        res.status(400).json(err);
      }
});








module.exports = router;