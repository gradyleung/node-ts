// This file is created by egg-ts-helper@1.35.1
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportNews from '../../../app/controller/news';
import ExportTransport from '../../../app/controller/transport';
import ExportUsers from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    news: ExportNews;
    transport: ExportTransport;
    users: ExportUsers;
  }
}
