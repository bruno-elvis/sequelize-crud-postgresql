const { Model, DataTypes } = require('sequelize');

class Vehicle extends Model {
    static init(sequelize) {
        super.init( {
            type: DataTypes.STRING 
        }, {
            sequelize
        } );
        
    };

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'vehicle_id', through: 'user_vehicle', as: 'users' });
    };

};

module.exports = Vehicle;