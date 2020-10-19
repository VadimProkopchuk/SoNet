const userPresenter = (user) => {
    const {_id, password, __v, first_name, last_name, ...userData} = user._doc;
    const full_name = `${first_name || ''} ${last_name || ''}`.trim();

    return {
        ...userData,
        id: _id,
        first_name,
        last_name,
        full_name
    };
}

module.exports = userPresenter;
