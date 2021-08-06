const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model { }

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    item_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_needby: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    completion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    trip_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Trip',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'item',
  }
);

module.exports = Item;
