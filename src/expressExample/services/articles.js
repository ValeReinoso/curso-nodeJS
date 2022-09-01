const httpErrors = require('http-errors')
const { mongo: { queries } } = require('../database')

class ArticleService {
    #articleId
    
    /**
     * @param { String | undefined} articleId 
     */
    constructor(articleId = ''){
        this.#articleId = articleId
    }

    //Añadir logica de negocio
}

module.exports = ArticleService