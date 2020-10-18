const AuthService = require("../services/Account/AuthService");

const auth = async (req, res) => {
    const { login, password } = req.body;
    try {
        const token = await AuthService.auth(login, password);
        res.json(token);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

module.exports = {
    auth
}
