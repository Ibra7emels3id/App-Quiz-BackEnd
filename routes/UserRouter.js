const express = require('express');
const { AddUserController, getAllUsers, loginUser, getUser, deleteUser, getDataUser, editUser } = require('../controllers/UserControlls');
const UserRouterCLient = express.Router()

UserRouterCLient.post('/register' , AddUserController)
UserRouterCLient.get('/users' , getAllUsers)
UserRouterCLient.post('/login' , loginUser)
UserRouterCLient.get('/user' , getUser)
UserRouterCLient.delete('/user/:id' , deleteUser)
UserRouterCLient.get('/user/:id' , getDataUser)
UserRouterCLient.put('/user/:id' , editUser)





module.exports = UserRouterCLient;