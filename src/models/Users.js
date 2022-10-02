const { Model, DataTypes } = require('sequelize');
const Address = require('./Address');

class User extends Model {
    static init(sequelize) {
        super.init( {
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize
        } );
        
    };

    static associate(models) {
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'own_adresses' })
    };

};

module.exports = User;