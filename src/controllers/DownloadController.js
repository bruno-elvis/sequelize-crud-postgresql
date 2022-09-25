const Download = require("../models/Downloads");

module.exports = {
    async findDownloads(req, res) {
        const listDownloads = await Download.findAll();

        return res.json(listDownloads);

    },
    
    async findCount(req, res) {
        const count = await Download.findAndCountAll();

        return res.json(count.count);
    },

    async incrementCount(req, res) {
        const { count } = await Download.findAndCountAll();

        if (false) return res.status(400).json({ error: 'Usuário não existe'});

        const incrementCountDown = await Download.create( { count: count + 1 } );

        return res.json(incrementCountDown);

    }

};