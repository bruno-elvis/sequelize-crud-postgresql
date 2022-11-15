const User = require('../models/Users');

module.exports = {
    async findUsers(req, res) {
        const listUsers = await User.findAll();

        return res.json(listUsers);

    },

    async storeUser(req, res) {
        const { name, email, password } = req.body;

        const newUser = await User.create( { name, email, password } );

        return res.json(newUser);

    }

};