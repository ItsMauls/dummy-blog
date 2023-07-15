const Articles = require('../models/articles')


exports.getCompose = (req,res) => {
 
    res.render('compose',{
      pageTitle : 'Compose'
    
    })
  }
  
  exports.postCompose = (req,res) => {
   const userPublish = new Articles(req.body.title, req.body.post)
   userPublish.save()

    res.redirect('/')
    
  }

