const jwt = require('jsonwebtoken');
const { JWT } = require('../../config');

class JwtService {
    static sign(payload) {
        const token = jwt.sign(payload, JWT.SECRET, { expiresIn: JWT.EXPIRES_IN });
        return {
            token,
            expiresIn: 3600 // 1h
        };
    }

    static verify(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, JWT.SECRET, (err, payload) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(payload);
                }
            });
        });
    }
}

module.exports = JwtService;
