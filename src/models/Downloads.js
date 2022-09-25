const { Model, DataTypes } = require('sequelize');

class Download extends Model {
    static init(sequelize) {
        super.init( {
            count: DataTypes.INTEGER
        }, {
            sequelize
        } );
        
    };

};

module.exports = Download;