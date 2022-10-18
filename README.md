# DeFi CS294-177 Group Project Website

A Node.js app using [Express 4](http://expressjs.com/).
Live on https://defi-dream-team.herokuapp.com/ 

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally
To run this on your local machine... 

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed. 

Next, you want to clone this github project:
```sh
$ git clone https://github.com/s-almeda/defi-fa22.git
```

cd into the new directory, then install the node dependencies as follows:
```
$ npm install
```
Next, open up the file called ``index.js``
Find the block that says:
```
//IF RUNNING LOCALLY, (eg to test) UNCOMMENT THIS BLOCK:
const host = 'localhost';
const PORT =  8000; //specify that we want to run our website on 'localhost:8000/'

//If running locally, comment out the following line. Be sure to uncomment it before pushing to the web server.
//const PORT =  process.env.PORT;

```
Remove the forward slashes from lines 12 and 13 to uncomment them. Use '//' to comment out line 16. Now you're ready to run locally!
Go back to your Command Line, and run:
```
$ npm start
```
Your app should now be running on [localhost:8000](http://localhost:8000/).
Any changes you make to the html/css/javascript should be reflected immediately. 
Be sure to recomment lines 12 and 13, then uncomment line 16 before you push changes to GitHub. 

## Deploying to Heroku
I'm not actually sure if this will work from your machines, but I believe that if you push changes to the GitHub they will be reflected on the live site. If not, I may have to run commands on my machine to get the live site to reflect updates. We can work it out! 
Pushing changes to github will look like the following: 
```
$ git add CHANGEDFILENAME.txt 
$ git commit -m "describe your changes here"
$ git push
```

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
