const { User } = require('../models');
const { userPresenter } = require('../presenters');

const getAll = async (req, res) => {
    const users = await User.find({});
    res.send(users.map(userPresenter));
};

module.exports = {
    getAll
}
