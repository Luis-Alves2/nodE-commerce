import swaggerJsdoc from 'swagger-jsdoc';

const fs = require('fs');

const swaggerDefinition = {
    openapi: "3.1.0",
    info: {
      title: 'E-Commerce API Documentation',
      version: '1.0.0',
      description: 'API documentation for the E-Commerce application',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local development server',
      },
    ],
};

// Log the list of files in dist/routes
console.log('Files:', fs.readdirSync('../routes'));

const options = {
    swaggerDefinition,
    apis: ['../routes/*.js'], // Path to the API routes files
};

const swaggerSpec = swaggerJsdoc(options);

fs.writeFileSync('./swagger.json', JSON.stringify(swaggerSpec, null, 2));

//export default swaggerSpec;

