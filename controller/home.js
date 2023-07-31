const Articles = require('../models/articles')

const homeStartingContent = "Created By Amoeba Level Programmer Using MongoDB and Express";

exports.getHome = (req,res) => {

    Articles.find()
    .then(articles => {
        res.render('home', {
            pageTitle : 'Home',
            content : homeStartingContent,
            articles : articles,
            })
    }) 
}

