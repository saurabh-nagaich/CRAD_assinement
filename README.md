# Filter 
A full Stack web application

## Description
## **How to build and run this project**
1. Clone this repository.
2. run on terminal cd backend 
3.   npm i
4.   npm start 

5. open new cmd
6. cd frontend
7. npm i 
8. npm start


## **Backend Project Directory Structure**
```bash
    ├── controllers
    │   ├── errorController.js
    │   ├── filterController.js
    │   └── resetController.js
    ├── models
    |   └── filter.js
    ├── routes
    |   ├── filter.js
    |   └── resetRoute.js
    ├── utils
    |   ├── appError.js
    |   └── catchAsync.js
    ├── app.js
    ├── config.env
    ├── package-lock.json
    ├── package.json
    └── server.js
```

# API Examples

## **API LIST**
```bash
    ├── Ad 
    │   ├── Get a single aD
    │   ├── Get all Ad
    │   ├── create a new Ad
    │   ├── Update Ad
    │   └── delete Ad
    ├── reset
```
**Routes**
```javascript
    app.use('/api/v1/ad', tourRouter);
    app.use('/api/v1/reset', userRouter);
``

# FrontEnd part under Development phase
* Support it by clicking the 🌟 button on the upper right of this page. ❤️