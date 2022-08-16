const { Router } = require('express')
const { nanoid } = require('nanoid')

const users = require('../../data/user')
const response = require('./response')

const UserRouter = Router()

UserRouter.route('/user')
    .get((req,res) => {
        res.send({
            message: users,
            error: false
        })
    })

    .post((req,res) => {
        const { body: { name, email } } = req

        users.push({
            id: nanoid(),
            name,
            email
        }),

        response({ error: false, message: users, res, status: 201 })
    })

UserRouter.route('/user/:id')
    .delete((req, res) => {
        const { params: { id } } = req
        const userIndex = Boolean(users.findIndex(user => user.id === id))

        if(userIndex === -1){
            return response({ message: `User with id: ${id} was not found`, res, status: 404 })
        }

        users.splice(userIndex, 1)
        response({ error: false, message: users, res, status: 200 })
    })
    .patch((req, res) => {
        const { 
            body: { name, email },
            params: { id } 
        } = req
        const userIndex = Boolean(users.findIndex(user => user.id === id))

        if(userIndex === -1){
            return response({ message: `User with id: ${id} was not found`, res, status: 404 })
        }

        users.splice(userIndex, 1, {
            ...users[userIndex],
            ...( name && { name } ),
            ...( email && { email } )
        })
        response({ error: false, message: users, res, status: 200 })
    })

module.exports = UserRouter