const router = require('express').Router();

const {
    addFriend,
    deleteFriend,
    addUser,
    deleteUser,
    getAllUsers,
    getUserById,
    updateUser
} = require('../../controllers/user-controller');