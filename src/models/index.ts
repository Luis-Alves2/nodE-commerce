// import fs from 'fs';
// import path from 'path';
// import { Sequelize, Model, DataTypes } from 'sequelize';
// import dotenv from 'dotenv';

// dotenv.config();

// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
// const db: any = {};

// let sequelize: Sequelize;

// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable]!, config);
// } else {
//   sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
//     host: process.env.DB_HOST!,
//     port: Number(process.env.DB_PORT),
//     dialect: 'postgres',
//   });
// }

// fs.readdirSync(__dirname)
//   .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js' && !file.includes('.test.js'))
//   .forEach(file => {
//     const model = require(path.join(__dirname, file)).default(sequelize, DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;
