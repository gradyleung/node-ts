import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {};
  config.news = {
    pageSize: 20,
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'node',
    username: 'root',
    password: 'abcd1234',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    define: {
      timestamps: false, // true by default
      freezeTableName: true,
    },
  };
  return config;
};
// exports.sequelize = {
//   username: 'root',
//   password: 'abcd1234',
//   database: 'node',
//   host: '127.0.0.1',
//   dialect: 'mysql',
// };

