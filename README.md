# BG-interview

This repository has been created to deliver the code done by guillemcasanova@gmail.com to the company as part of the second step of the interview.

## The repo contains two folders:

- **landing-page** : That contains the simple front-end requested in the documentation that is uploaded in the following link [https://keen-noether-d8b69f.netlify.com](https://keen-noether-d8b69f.netlify.com)

- **api** : The api is the back-end of the project. It has been developed using nodejs. Below you can find the packages that has been used in this project. The link where the API is runing is the following: [https://boiling-sands-23849.herokuapp.com](https://boiling-sands-23849.herokuapp.com). When an access is required to this website it is automaticaly redirected to the land-page provided above.

## Packages

- [express](https://www.npmjs.com/package/express): This package allow node js to recive and answer http request
- [cheerio](https://www.npmjs.com/package/cheerio): This package is a library like [jquery](https://jquery.com) that do easyer the scratch of the google response
- [request](https://www.npmjs.com/package/request): This package is used to do the request to the google.com page

## To run the api locally

1. Clone de repository
2. Enter to the api folder
3. Run: (my nodejs version: **v10.15.3**)
```
 npm i
 npm start
```

## To use the api

1. Use postman (for example) and send request to **localhost:3000/search?q="the word you want to request"** 

