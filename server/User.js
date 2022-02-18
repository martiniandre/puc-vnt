const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class User extends Model{}

User.init({
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'user'
})

module.exports = User;