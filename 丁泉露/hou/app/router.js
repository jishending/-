'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.home.login);
  router.post('/zhuce', controller.home.zhuce);
  router.post('/getAll', controller.home.getAll);
  router.post('/addlist', controller.home.addlist);
  router.post('/deletlist', controller.home.deletlist);
  router.post('/updatalist', controller.home.updatalist);
};
