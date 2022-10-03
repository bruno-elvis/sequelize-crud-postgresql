const Vehicle = require('../models/Vehicles');
const User = require('../models/Users');

module.exports = {
    async findVehicles(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: {
                association: 'vehicles',
                attributes: ['type'], //Atributo da tabela que eu desejo receber na resposta
                through: { // Para retornar apenas os dados da tabela e não os atributos do relacionamento user-vehicle (Array vazio anula o retorno de todos os atributos)
                    attributes: [/*atributos ta tabela de relacionamento que quero receber na resposta*/]
                }
            }
        });

        return res.json(user.vehicles);
    },

    async storeVehicle(req, res) {
        const { user_id } = req.params;
        const { type } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) return res.status(400).json({ error: 'Usuário não existe'});

        const [ vehicle ] = await Vehicle.findOrCreate({
            where: { type }
        });

        await user.addVehicle(vehicle);

        return res.json(vehicle);
    },

    async deleteVehicle(req, res) {
        const { user_id } = req.params;
        const { type } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) return res.status(400).json({ error: 'Usuário não existe'});

        const vehicle = await Vehicle.findOne({
            where: { type }
        });

        await user.removeVehicle(vehicle);

        return res.json({msg: 'Vínculo removido com sucesso'});

    }

};