const User = require('../models/Users');

module.exports = {
    async findUsers(req, res) {
        const listUsers = await User.findAll();

        return res.json(listUsers);

    },

    async storeUser(req, res) {
        const { name, email } = req.body;

        const newUser = await User.create( { name, email } );

        return res.json(newUser);

    }

};