const Address = require('../models/Address');
const User = require('../models/Users');

module.exports = {
    async findAddresses(req, res) {
        const listAddresses = await Address.findAll();

        return res.json(listAddresses);

    },

    async storeAddress(req, res) {
        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) return res.status(400).json({ error: 'Usuário não existe'});

        const newAddress = await Address.create( { user_id, zipcode, street, number } );

        return res.json(newAddress);

    }

};