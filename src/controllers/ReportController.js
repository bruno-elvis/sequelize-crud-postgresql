const { Op } = require('sequelize');
const User = require('../models/Users');

module.exports = {
    async show(req, res) {
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%teste%' // Operador (Op) iLike é insensitive, o Op.like é case-sensitive
                }
            },
            include: [
                { association: 'own_adresses', 
                where: { 
                    street: { 
                        [Op.iLike]: '%Sucesso%' 
                    } 
                }, 
                attributes: ['street'] 
                },

                {
                    association: 'vehicles', 
                    required: false, // mesmo que o usuário não tenha veículos vinculados será retornado na resposta se for compatível com os filtros definidos
                    where: {
                        type: 'Moto'
                    },
                    through: { // Para retornar apenas os dados da tabela e não os atributos do relacionamento user-vehicle (Array vazio anula o retorno de todos os atributos)
                        attributes: [/*atributos ta tabela de relacionamento que quero receber na resposta*/]
                    },
                    attributes: ['id', 'type']
                }
            ]

        });

        res.json(users)
    }
};