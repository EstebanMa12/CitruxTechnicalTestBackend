"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = require("express");
const articleController_1 = require("../../controllers/articleController");
const queryController_1 = require("../../controllers/queryController");
const routes = (0, express_1.Router)();
routes.post('/article', articleController_1.createArticleController);
routes.get('/articles', articleController_1.getArticlesController);
routes.delete('/article/:id', articleController_1.deleteArticleController);
routes.get('/article/:id', articleController_1.getArticleController);
routes.post('/query', queryController_1.createQueryController);
routes.get('/queries', queryController_1.getQueriesController);
routes.delete('/query/:id', queryController_1.deleteQueryController);
routes.get('/queries/:articleId', queryController_1.getQueriesByArticleIdController);
exports.default = routes;
