/*
Lovingly prepared by shm. :3
*/

const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const fs = require("fs");

//IF RUNNING LOCALLY, (eg to test) UNCOMMENT THIS BLOCK:
//const host = 'localhost';
//const PORT =  8000; //specify that we want to run our website on 'localhost:8000/'

//If running locally, comment out the following line. Be sure to uncomment it before pushing to the web server.
const PORT =  process.env.PORT;


var publicPath = (process.cwd()+'/public'); 

//here's where we specify what to send to users that connect to our web server...
//if there's no url extension, it will show "index.html"
app.get('/', (req, res) => res.render(publicPath + '/views/pages/index.ejs'));
  
//depending on what url extension the user navigates to, send them the respective page. 
/*app.get('/b', function (req, res) {
    res.render(publicPath + '/views/pages/index.ejs');
});*/


let filenames = fs.readdirSync(process.cwd()+'/public');
filenames.forEach((file) => {
    console.log("File:", file);
});

app.use(express.static(publicPath));  //tell express to use that folder

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

