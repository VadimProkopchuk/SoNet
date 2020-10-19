const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    const saltRounds = 10;
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, (saltErr, salt) => {
            if (saltErr) {
                reject(saltErr);
            } else {
                bcrypt.hash(password, salt, (hashErr, hash) => {
                    if (hashErr) {
                        reject(hashErr);
                    } else {
                        resolve(hash);
                    }
                })
            }
        })
    });
};

const verifyPassword = (password, hash) => {
    return bcrypt.compare(password, hash);
}

module.exports = {
    hashPassword,
    verifyPassword
}
