const Address = require('../models/Address');
const User = require('../models/Users');

module.exports = {
    async findAdress(req, res) {
        const { user_id } = req.params;
        
        const user = await User.findByPk(user_id);

        if (!user) return res.status(400).json({ error: 'Usuário não existe'});

        const user_adresse = await User.findByPk(user_id, {
            include: { association: 'own_adresses' }
        });

        if (!user_adresse.own_adresses) return res.status(204).json({ msg: 'Usuário não possui endereço vinculado'});

        return res.json(user_adresse.own_adresses);

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