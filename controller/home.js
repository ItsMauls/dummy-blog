const Articles = require('../models/articles')

const homeStartingContent = "Created By Amoeba Level Programmer Using MongoDB and Express";
const secondDescription = "PERGI KE COMPOSE, ABIS ITU MASUKIN TITLE DAN DESCRIPTION SESUKA HATI!"

exports.getHome = (req,res) => {

    Articles.find()
    .then(articles => {
        res.render('home', {
            pageTitle : 'Home',
            SecondTitle : 'TUTORIAL CORET CORET DI WEB INI',
            content : homeStartingContent,
            secondDescription :secondDescription,
            articles : articles,
            })
    }) 
}

