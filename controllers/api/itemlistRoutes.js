const router = require("express").Router();
const { Trip, Item } = require("../../models");

// ====== CREATING A LIST ====== // 
router.post('/', async (req, res) => {
    try {
        const itemData = await Item.create({
            item_title: req.body.item_title,
            item_description: req.body.item_description,
            date_needby: req.body.date_needby,
            completion: req.body.completion,
            trip_id: req.body.trip_id,
        })
        res.status(200).json(itemData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// ====== UPDATING A LIST ====== // 
router.put('/:id', async (req, res) => {
    try {
        let dbItemData = await Item.findByPk(req.params.id);
        if (!dbItemData) {
            res.status(400).json({ message: 'No item found with that id' });
            return;
        } else if (dbItemData.get({ plain: true }).user_id !== req.session.userId) {
            res.status(400).json({ message: 'Item unavailable to edit' });
        } else {
            var updateObj = {};
            // Check what values to update
            if (typeof req.body.item_title !== 'undefined') {
                updateObj.item_title = req.body.item_title;
            }
            if (typeof req.body.item_description !== 'undefined') {
                updateObj.item_description = req.body.item_description;
            }
            if (typeof req.body.date_needby !== 'undefined') {
                updateObj.date_needby = req.body.date_needby;
            }
            if (typeof req.body.completion !== 'undefined') {
                updateObj.completion = req.body.completion;
            }
            console.log(req.body);
            console.log(updateObj);
            dbItemData = await Item.update(
                updateObj,
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );
            res.status(200).json({ message: 'Updated successfully!' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;