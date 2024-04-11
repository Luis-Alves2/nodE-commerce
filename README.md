# Node.js E-Commerce API

This is a RESTful API for a simplified e-commerce management system, built with Node.js, express, postgreSQL, Jest, yup and JWT.

## Features

- **Authentication**.
- **Permission Management**.
- **Customer Management**.
- **Product Management**.
- **Order Management**.
- **Docker Files**.


## Installation

1. Clone the repository:

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and define the essential variables:

   ```plaintext
   PORT=3000
   JWT_SECRET=yourJWTSecret
   ```

4. Generate the JS code with:

   ```bash
   tsc
   ```

5. Then go into the ./dist/ folder to run the node.js code:

   ```bash
   cd ./dist/
   node index.js
   ```
In case the user wants to go further and generate the OpenAPI documentation:


1. Clone the repository:

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and define the essential variables:

   ```plaintext
   PORT=3000
   JWT_SECRET=yourJWTSecret
   ```

4. Generate the JS code with:

   ```bash
   tsc
   ```

5. Then go into the ./dist/ folder , into the /docs folder, and run node.js on the configuration file for swagger:

    ```bash
   cd dist
   cd docs
   node swaggerConfig.js
   ```
    
6. After that, go back to the dist folder, and run the node.js command on the app:

   ```bash
   cd ..
   node index.js
   ```


## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.
