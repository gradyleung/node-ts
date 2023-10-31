import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};
// exports.sequelize = {
//   enable: true,
//   package: 'egg-sequelize',
// };
export default plugin;
