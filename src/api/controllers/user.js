const getUser = (req, res) => {
    const { user } = req.context;
    res.send(user);
}

module.exports = {
    getUser
};
