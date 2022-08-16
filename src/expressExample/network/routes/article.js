const { Router } = require('express')
const { nanoid } = require('nanoid')

const articles = require('../../data/article')
const response = require('./response')

const ArticleRouter = Router()

ArticleRouter.route('/article')
    .get((req,res) => {
        res.send({
            message: articles,
            error: false
        })
    })

    .post((req,res) => {
        const { body: { name, description, price  } } = req

        articles.push({
            id: nanoid(),
            name,
            description, 
            price
        }),

        response({ error: false, message: articles, res, status: 201 })
    })

ArticleRouter.route('/article/:id')
    .delete((req, res) => {
        const { params: { id } } = req
        const articleIndex = Boolean(articles.findIndex(article => article.id === id))

        if(articleIndex === -1){
            return response({ message: `Article with id: ${id} was not found`, res, status: 404 })
        }

        articles.splice(articleIndex, 1)
        response({ error: false, message: articles, res, status: 200 })
    })
    .patch((req, res) => {
        const { 
            body: { name, description, price },
            params: { id } 
        } = req
        const articleIndex = Boolean(articles.findIndex(article => article.id === id))

        if(articleIndex === -1){
            return response({ message: `Article with id: ${id} was not found`, res, status: 404 })
        }

        articles.splice(articleIndex, 1, {
            ...articles[articleIndex],
            ...( name && { name } ),
            ...( description && { description } ),
            ...( price && { price } )
        })
        response({ error: false, message: articles, res, status: 200 })
    })

module.exports = ArticleRouter