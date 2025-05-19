const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Person API',
    description: 'CRUD API for Person model',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js']; // Adjust if your main file is named differently

swaggerAutogen(outputFile, endpointsFiles, doc);
