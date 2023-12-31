const { amountRepository } = require("../../repositories");
const pendencies = require("../../utils/pendencies");

const amountUpdateService = {
    async execute(id, valor) {
        const value = await amountRepository.updateAmount(id, valor);
        const pay = await pendencies(id, value[0].valor);
        return { value, pay };
    }
}
module.exports = amountUpdateService;