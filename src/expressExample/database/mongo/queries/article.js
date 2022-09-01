const ArticleModel = require("../models/article")

/**
 * @param { Object } article
 * @param { String } article.id
 * @param { String } article.name
 * @param { String } article.description
 * @param { Number } article.price
 * @param { String } article.image
 * @returns save Article
 */
const saveArticle = async article => {
    const savedArticle = new ArticleModel(article)
    await savedArticle.save()

    return savedArticle
}

/**
 * @param { String } id
 * @returns found Article
 */
const getOneArticle = async id => {
    const articles = await ArticleModel.find({ id })

    return articles[0]
}

/**
 * @returns found All Articles
 */
 const getAllArticles = async () => {
    const articles = await ArticleModel.find()

    return articles
}

/**
 * @param { String } id
 * @returns Remove Article
 */
const removeOneArticle = async id => {
    const article = await ArticleModel.findOneAndRemove({ id })

    console.log(article)
}

/**
 * @param { Object } article
 * @param { String } article.id
 * @param { String | undefined} article.name
 * @param { String | undefined} article.description
 * @param { Number | undefined} article.price
 * @param { String | undefined} article.image
 * @returns Update Article
 */
 const updateOneArticle = async article => {
    const { id, name, description, price, image } = article 
    article = await ArticleModel.findOneAndUpdate( 
        { id }, 
        { name, description, price, image },
        { new: true} 
    )

    console.log(article)
}

module.exports = {
    saveArticle,
    getOneArticle,
    getAllArticles,
    removeOneArticle,
    updateOneArticle
}