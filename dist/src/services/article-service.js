"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticleService = exports.deleteArticleService = exports.getArticlesService = exports.createArticleService = void 0;
const article_repository_1 = require("../repositories/article.repository");
const createArticleService = (url, content, summary) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = (0, article_repository_1.createArticle)(url, content, summary);
        return article;
    }
    catch (error) {
        console.error("[service]: Error creating article");
        console.error(error);
    }
});
exports.createArticleService = createArticleService;
const getArticlesService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const articles = (0, article_repository_1.getArticles)();
        return articles;
    }
    catch (error) {
        console.error("[service]: Error getting articles");
        console.error(error);
    }
});
exports.getArticlesService = getArticlesService;
const deleteArticleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = (0, article_repository_1.deleteArticle)(id);
        return article;
    }
    catch (error) {
        console.error("[service]: Error deleting article");
        console.error(error);
    }
});
exports.deleteArticleService = deleteArticleService;
const getArticleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = (0, article_repository_1.getArticle)(id);
        return article;
    }
    catch (error) {
        console.error("[service]: Error getting article");
        console.error(error);
    }
});
exports.getArticleService = getArticleService;
