const UrlModel = require("../models/url")

/**
 * @param { Onject } url
 * @param { String } url.id
 * @param { String } url.link
 * @param { String } url.userId mongo user id
 * @returns saved Url
 */
const saveUrl = async url => {
    const saveUrl = new UrlModel(url)

    await saveUrl.save()

    return saveUrl
}

/**
 * @param { String } id
 * @returns found Url
 */
const getOneUrl = async id => {
    const urls = await UrlModel.find({ id }).populate('userId')

    return urls[0]
}

module.exports = {
    saveUrl,
    getOneUrl
}