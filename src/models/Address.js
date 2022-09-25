const { Model, DataTypes } = require('sequelize');
const User = require('./Users');

class Address extends Model {
    static init(sequelize) {
        super.init( {
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER
        }, {
            sequelize
        } );
        
    };

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'own_user' })
    };

};

module.exports = Address;