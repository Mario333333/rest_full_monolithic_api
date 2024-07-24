const BaseRepository = require("./base.repository")
let _user = null;

// Methods not shown in the class are inherited from the BaseRepository class
class UserRepository extends BaseRepository {

    constructor({ User }) {
        super(User)
        _user = User;
    }

    async getUserByUserName(username) {
        console.log(username);
        return await _user.findOne({ username })
    }

}

module.exports = UserRepository