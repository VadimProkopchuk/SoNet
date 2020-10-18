const getUser = (req, res) => {
    const { user } = req.context;
    const { __v, password, _id, ...userData } = user._doc;
    res.send({
        id: _id,
        ...userData
    });
}

module.exports = {
    getUser
};
