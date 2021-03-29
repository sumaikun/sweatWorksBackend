const express = require('express');
const bodyParser = require('body-parser');
const properties = require("./properties");
const appRoutes = require("./api/appRoutes");
const app = express();
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true});
const timeout = require('connect-timeout');
const router = express.Router();
const bodyParserJSON = bodyParser.json({limit: '100mb'});

app.use(timeout('100s'));
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use('/images', express.static(__dirname + '/images'))

// Error handling
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Credentials", "true");
   res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
   res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
 next();
});

// use express router
app.use('/api',router);
//call app routing
appRoutes(router);

app.use(function(err, req, res, next) {  
  
  res.status(500).send({ error: err.message });
});

// intialise server
app.listen(properties.API_PORT, (req, res) => {
  console.log(`Server is running on ${properties.API_PORT} port.`);  
})



