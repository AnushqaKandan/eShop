import express from 'express'
import bodyParser from 'body-parser'
import {user} from '../model/User.js'

const userRouter = express.Router()

userRouter.use(bodyParser.json())

userRouter.get('/', (req, res) => {
    user.fetchUsers(req, res)
})

userRouter.get('/:id', (req, res) => {
    user.fetchUsers(req, res)
})


userRouter.post('/register', (req, res) => {
    user.registerUser(req, res)
})

userRouter.patch('/user/:id,', (req, res) => {
user.updateUser(req, res)
})

userRouter.delete('./user/:id', (req, res) => {
    user.deleteUser(req, res)
})

export{
    express,
    userRouter
}