const _ = require('lodash');
const Articles = require('../models/articles')

exports.getParams = (req,res) => {
    let articles = Articles.fetchAll()
    for(let article of articles) {
        const simpleTitle = _.lowerCase(article.getTitle)
        const simpleParams = _.lowerCase(req.params.article)
        if(simpleTitle === simpleParams) {
      
            res.render('post',{
                article : article,
                pageTitle : 'Filter Pages'
                
                         
            })
            console.log(simpleTitle)
            console.log(req.params.article)
        } 
    }
    
  }