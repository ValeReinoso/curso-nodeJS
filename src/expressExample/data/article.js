const { nanoid } = require('nanoid')

const articles = [{
    id: nanoid(),
    name: 'Celular',
    description: 'Galaxy S20',
    price: 600000
}]

module.exports = articles

// Articles: price, image, description, name