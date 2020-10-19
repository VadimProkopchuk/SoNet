const { userPresenter } = require('../presenters');

const getUser = (req, res) => {
    const { user } = req.context;
    res.send(userPresenter(user));
}

module.exports = {
    getUser
};
