const { Item } = require('../models');

const itemData = [
  {
    item_title: 'Sunscreen',
    item_description: 'For sunny beach day!',
    date_needby: 'August 1, 2021',
    completion: true,
    trip_id: 1,
  },
  {
    item_title: 'Hat',
    item_description: 'Bring the one with blue polkadots',
    date_needby: 'August 1, 2021',
    completion: true,
    trip_id: 1,
  },
  {
    item_title: 'Scarves',
    item_description: 'Bring two just incase',
    date_needby: 'Dec 10, 2021',
    completion: true,
    trip_id: 2,
  },
];

const seedItem = () => Item.bulkCreate(itemData);

module.exports = seedItem;
