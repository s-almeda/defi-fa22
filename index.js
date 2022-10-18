/*const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/

const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const fs = require("fs");

//specify that we want to run our website on 'http://localhost:8000/'
const host = 'localhost';
const PORT =  process.env.PORT;


var publicPath = (process.cwd()+'/public'); //get the path to use our "public" folder where we stored our html, css, images, etc


//here's where we specify what to send to users that connect to our web server...
//if there's no url extension, it will show "index.html"
app.get('/', (req, res) => res.sendFile(publicPath + '/index.html'));
  
//depending on what url extension the user navigates to, send them the respective html file. 
app.get('/a', function (req, res) {
    console.log("aaa");
    res.sendFile(publicPath + '/a.html');
});
app.get('/b', function (req, res) {
    res.sendFile(publicPath + '/b.html');
});
app.get('/c', function (req, res) {
    res.sendFile(publicPath + '/c.html');
});

let filenames = fs.readdirSync(process.cwd()+'/public');
filenames.forEach((file) => {
    console.log("File:", file);
});

app.use(express.static(publicPath));  //tell express to use that folder

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

