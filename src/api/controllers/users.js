const { User } = require('../models');
const { userPresenter } = require('../presenters');

const getAll = async (req, res) => {
    const users = await User.find({});
    res.send(users.map(userPresenter));
};

const getById = async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ _id: id});
    res.send(userPresenter(user));
};

module.exports = {
    getAll,
    getById
}
