const loginSchema = require("../schemas/loginSchema");

const bodyValidation = schema => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body);
        next();
    } catch (error) {
        return res.status(400).json({ mensagem: error.message })
    }
};

module.exports = bodyValidation;