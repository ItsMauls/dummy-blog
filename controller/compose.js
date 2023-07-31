const Articles = require('../models/articles')


exports.getCompose = (req,res) => {
 
    res.render('compose',{
      pageTitle : 'Compose'  
    })
  }
  
  exports.postCompose = (req,res) => {
    const title = req.body.title
    const description = req.body.post
    Articles.insertMany({
      title : title,
      description : description
    })
    .then(result => 
      res.redirect('/'))
   
  }

