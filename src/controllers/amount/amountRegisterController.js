const { ConflictError } = require("../../errors");
const amountRegisterService = require("../../services/amount/amountRegisterService");

const amountRegisterController = {
    async handle(req, res) {
        try {
            const { id } = req.userLogged;
            const { valor } = req.body;

            const { newValue, pay } = await amountRegisterService.execute(id, valor);

            return res.json({ saldo: newValue, pay });
        } catch (error) {
            if (error instanceof ConflictError) {
                return res.status(403).json({ error: error.message });
            }
            console.log(error)
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
    }
};
module.exports = amountRegisterController;