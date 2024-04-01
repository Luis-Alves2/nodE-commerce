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

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.
