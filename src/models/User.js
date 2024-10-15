const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('user', {

    image:{
        type: DataTypes.STRING,
        allowNull: false

    },
    
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phone:{
        type: DataTypes.INTEGER,
        allowNull: false

    },

    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

});

module.exports = User;