import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {};
  config.news = {
    pageSize: 20,
  };
  // config.sequelize = {
  //   dialect: 'mysql',
  //   host: '127.0.0.1',
  //   port: 3306,
  //   database: 'node',
  //   username: 'root',
  //   password: ''
  // };
  return config;
};
exports.sequelize = {
  "username": "root",
  "password": null,
  "database": "node",
  "host": "127.0.0.1",
  "dialect": "mysql"
};


