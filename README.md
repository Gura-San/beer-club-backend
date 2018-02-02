## Dollar Beer Club website Back-End
This is Back-End part for the MERN application website - [Dollar Beer Club](https://github.com/codenamequet/beer-club-front-end) that provides complete CRUD functionality as well as access to the 3rd party API [BreweryDB.com](http://www.brewerydb.com/). The website is meant to help brew enthusiasts find and acquire their favorite brew.


## Dev Team
Sandro Guraspasvili

Alonzo Moses

Francis Addison

Marquet Reid


## Motivation
Project was done for the WDI20 third group project assignment


## Build status
Working, [Heroku deploy](https://dbc-project3-backend.herokuapp.com/)


## Tech/framework used
This is an Express Backe-End application that resolves requests from the [Dollar Beer Club](https://github.com/codenamequet/beer-club-front-end)

The server was written in JavaScript using Express and Mongoose frameworks.


## Packages used

body-parser: 1.18.2,
    
brewerydb-node: 0.0.1,
    
cors: 2.8.4,
    
dotenv: 4.0.0,
    
express: latest,
    
method-override: 2.3.10,
    
mongoose: 4.4.11,
    
nodemon: 1.14.11


## Installation
1. Fork/Clone the repo
2. ```$npm i``` to install the dependencies
3. ```$nodemon``` to run the server daemon, i.e. launch the server
4. Test CRUD requests either with postman app or otherwise

## CRUD endpoints
```post on localhost:port/buy/:id```


```get on localhost:port/search/:name```


```put on localhost:port/cart/update/:qnt```


```delete on localhost:port/cart/remove/:id```


## Known issues
none


## Shout-out
A big shoutout to Instructor team for helping with the logic during the development process and My teammates for enormous help and support!
