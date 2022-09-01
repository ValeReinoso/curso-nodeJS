const { Type } = require('@sinclair/typebox')

const articleSchema = Type.Object({
    name: Type.String({ 
        minLength: 2 
    }),
    description: Type.String({ 
        minLength: 2 
    }),
    price: Type.Number({ 
        format: 'email'
    }),
    image: Type.String({ 
        //TODO falta validacion
    })
})

const updateArticleSchema = Type.Object({
    name: Type.Optional(Type.String({ 
        minLength: 2 
    })),
    description: Type.Optional(Type.String({ 
        minLength: 2 
    })),
    price: Type.Optional(Type.Number({ 
        //TODO falta validacion
    })),
    image: Type.String({ 
        //TODO falta validacion
    })
})

const articleIdSchema  = Type.Object({
    id: Type.String({
        minLength: 21,
        maxLength: 21
    })
})

module.exports = {
    articleSchema,
    updateArticleSchema,
    articleIdSchema
}