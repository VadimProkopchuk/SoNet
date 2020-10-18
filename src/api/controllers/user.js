const getUser = (req, res) => {
    const { user } = req.context;
    const { __v, password, ...userData } = user._doc;
    res.send(userData);
}

module.exports = {
    getUser
};
