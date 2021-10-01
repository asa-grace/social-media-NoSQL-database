const { User } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find({})
    }
}

getUserById({ params }, res) {
    User.findOne({ _id: params.id })
    
}