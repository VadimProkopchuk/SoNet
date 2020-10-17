module.exports = function authorize() {
    return (req, res, next) => {
        const { user } = req.context;

        if (!user) {
            res.status(401).json({
                message: "Unauthorized"
            });
        } else {
            next();
        }
    }
}
