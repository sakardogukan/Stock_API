# Stock Api Project

## Used technologies & Methods:
* Node.Js
* Express.Js
* Mongoose - MongoDB SQL
* Authorization And Permissions with Simple Token
* Password Crypto
* Documentation: Swagger / Redoc / Json
* Logging
-----

### ER (Entity Relationship Diagram) Diagram
<img src="./src/img/erdStockApi.png" width="850" height="500" alt="ERD"></img> 

---

### Steps to be taken before running the project.

```
- The project is downloaded from the github repo.
- After the project is opened in VSCode, the following commands are run from the gitBash terminal.

$ npm init -y
$ npm i express dotenv express-async-errors
$ npm i mongoose
$ npm i morgan
$ npm i jsonwebtoken
$ npm i redoc-express swagger-autogen swagger-ui-express cors
$ npm i multer nodemailer
$ echo NODE_ENV=development > .env
$ echo PORT=8000 >> .env
$ echo MONGODB=mongodb://127.0.0.1:27017/stockApi >> .env
$ echo PAGE_SIZE=20 >> .env
$ echo SECRET_KEY=a7db7ashd7ashd7ahsd7ashd7ashd7hasd7g2367f4e219er >> .env
$ echo ACCESS_KEY=asıda87shd7ahsdh7as7dhas7dh7sadhas7dha7sdha7sdhas >> .env
$ echo REFRESH_KEY=ijasd8ahsd8jhas8dha8sd8asdh8ashd8ashd8ahsd*ds9d9f >> .env
$ mkdir logs
$ cp ./env-sample ./.env
$ nodemon // * Running *

- The synchronization function in line XXXX of the index.js file should be run once and disabled again.
- Testing is done with the following URL queries via Thunder Client or Postman or Browser. If changes are made to the Swagger file, the "$ node swagger.js" command should be used in the terminal.
```

### Folder/File Structure:

```
    src/
        config/
            dbConnection.js
            swagger.json
        controllers/
        helpers/
        img/
            erdStockApi.png
        middlewares/
        models/
        routes/
    .env
    .gitignore
    env-sample
    index.js
    package-lock.json
    package.json    
    Readme.md
    swagger.js
```
### Resources used
* https://mongoosejs.com/docs/queries.html
* http://expressjs.com/en/resources/middleware/cookie-session.html
* https://www.npmjs.com/package/cookie-session
* https://nodejs.org/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest
* https://www.mongodb.com/docs/manual/reference/operator/query/regex/
* https://expressjs.com/en/resources/middleware/morgan.html
* https://swagger-autogen.github.io/docs/
* https://expressjs.com/en/resources/middleware/morgan.html
* https://regexr.com/
* https://www.w3schools.com/jsref/jsref_tolocalestring.asp
* https://ethereal.email/
* https://expressjs.com/en/resources/middleware/multer.html


> Designed By DOGUKAN © Dec 2023