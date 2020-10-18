const { User } = require('../../models');
const JwtService = require('../Token/JwtService');
const { verifyPassword } = require('../Security/PasswordService');

class AuthService {
    static async auth(login, password) {
        const user = await User.findOne({ email: login });

        if (user) {
            const isCorrectPassword = await verifyPassword(password, user.password);
            if (!isCorrectPassword) {
                throw new Error('Incorrect login or password.');
            }

            const payload = {
                id: user._id
            }

            return JwtService.sign(payload);
        } else {
            throw new Error('User not found.');
        }
    }

    static async getUserByToken(token) {
        const { id } = await JwtService.verify(token);

        return await User.findOne({ _id: id });
    }
}

module.exports = AuthService;
