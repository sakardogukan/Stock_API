"use strict"

/* ------------- SWAGGER AUTOGEN ------------------ */
require('dotenv').config()
const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || '127.0.0.1'

const swaggerAutogen = require('swagger-autogen')()

const packageJson = require('./package.json')

const document = {
    info: {
        version: packageJson.version,
        title: packageJson.title,
        desciption: packageJson.description,
        termsOfService: 'http://127.0.0.1:8000/',
        contact: { name: packageJson.author, email: packageJson.email },
        license: { name: packageJson.license }
    },
    host: `${HOST}:${PORT}`,
    basePath: '/',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    // securityDefinitions: {
    //     Token: {

    //     },
    //     Bearer: {

    //     },
    // },
    // security: [{ Token: [] }, { Bearer: [] }],
    // definition: {
    //     //Models:

    // }
}

const routes = ['./index.js']
const outputFile = './src/config/swagger.json'

//? Create JSON file:
swaggerAutogen(outputFile, routes, document)