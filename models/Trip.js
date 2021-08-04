const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_end: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip',
  }
);

module.exports = Trip;
