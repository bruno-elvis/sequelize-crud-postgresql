const { Model, DataTypes } = require('sequelize');

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
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'own_adresses' });
        this.belongsToMany(models.Vehicle, { foreignKey: 'user_id', through: 'user_vehicle', as: 'vehicles' });
    };

};

module.exports = User;