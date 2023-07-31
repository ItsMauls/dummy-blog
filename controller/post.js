const _ = require('lodash');
const Articles = require('../models/articles')

exports.getParams = (req,res) => {
    const articleId = req.params.articleId
    Articles.findById(articleId)
    .then(article => {
            if(article) {
          
                res.render('post',{
                    article : article,
                    pageTitle : 'Filter Pages'           
                })
          
            } 
        })
    .catch(err => console.log(err))
    }
 
    
     // const simpleParams = _.lowerCase(req.params.article)
  