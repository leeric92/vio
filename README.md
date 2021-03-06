# Vio
Photo Album App built with React and Instagram API

## USER FLOW

#### Login with Instagram Account using OAuth

![login](https://github.com/leeric92/vio/blob/master/images/login.png)

#### Main Screen with the list of saved photo albums
![main](https://github.com/leeric92/vio/blob/master/images/main.png)

#### Customize or Create your Album
![customize](https://github.com/leeric92/vio/blob/master/images/customize.png)


#### View Your Album when Finished
![albumview](https://github.com/leeric92/vio/blob/master/images/albumdetail.png)
![albumview2](https://github.com/leeric92/vio/blob/master/images/albumdetail2.png)

## AUTHOR
Eric Le, therealericle@gmail.com

## BROWSER
Chrome

## INSTALLING DEPENDENCIES

Fork and clone this repo to your local machine

Type these commands to get started:

1. Follow this link to install Homebrew (http://brew.sh/) if you don't have one
2. `brew install node` if you haven't installed nodejs
3. `npm install` node dependencies
4. `brew install mongodb` if you need to install mongoDB client
5. create `/data/db` folder at root directory if it doesn't exist already
6. run `mongod --dbpath ./data/db` process from the root directory in terminal
7. run gulp
8. Open Chrome browser and go to http://localhost:4000
9. Enjoy using the app


## TECH STACK

### FRONT END

- React
- Redux

### BACK END

- Node/Express
- MongoDB/Mongoose

### API

**'/api/users/'**

  post '/saveuser'         : Save a new user
  post '/createnewalbum'   : Create a new album schema and save
  post '/savephototoalbum' : Save a photo to an album 

**'/api/albums/'**

  post '/searchpicbytag'         : Search recent photo with a tag
  post '/searchpicbylocation'    : Search recent photo with a location
  post '/searchuser'             : Search for user info with their names
  post '/searchmediabyuserid'    : Search for recent photo of a user

### EXTERNAL APIS

Vio use of external APIs Instagram and Oauth.io

### BUILT SYSTEMS

- Gulp

### DESIGN DECISION

I use React to handle rendering of the UIs view and Redux to be a predictable
state container that make it easy to modify and view the state of application

Each view of the app is broken into each component that is rendered separately

In the backend, I use NodeJS to run server and Express to handle APIs call between my server and Instagram API server

I use browserify to perform live reload (so whenever I change my code, the browser is automatically refreshed, make it convenient). I use Babel to compile ES6 down to simple javascript. Gulp helps automate all these tasks and concatanate all of them into one javascript file to be served to client



