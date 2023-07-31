const { Schema } = require('mongoose')
const mongoose = require ('mongoose')

const articleSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String
    }
})
const Article = mongoose.model('Article', articleSchema)

module.exports = Article