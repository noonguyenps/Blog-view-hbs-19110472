const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const blogRouters = require('./routes/BlogRoutes');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname+'/public'));
app.engine('handlebars', handlebars.engine({
    defaultLayout:'main',
    partialsDir:'views/partials'
}));
app.use(
    express.urlencoded({
      extended: true,
    })
  );
app.use(express.json());
app.use('/',blogRouters);
app.use((req, res) => {
  res.status(404).render('error');
});
app.listen(5000);
