//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')
const homeRoutes = require('./routes/home')
const aboutRoutes = require('./routes/about')
const contactRoutes = require('./routes/contact')
const composeRoutes = require('./routes/compose')
const paramsRoutes = require('./routes/post')
const app = express();
const _ = require('lodash');
const mongoose = require('./util/database')
const Article = require('./models/articles')

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'))

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(homeRoutes)
app.use(contactRoutes)
app.use(aboutRoutes)
app.use(composeRoutes)
app.use(paramsRoutes)




app.listen(3000, () => {
  
  console.log("Server started on port 3000");
});
