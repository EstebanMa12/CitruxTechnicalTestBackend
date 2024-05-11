"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticle = exports.deleteArticle = exports.getArticles = exports.createArticle = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const article_1 = __importDefault(require("../models/article"));
const createArticle = (url, content, summary) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = new article_1.default({ url, content, summary, createdAt: new Date() });
        yield article.save();
        return article;
    }
    catch (error) {
        console.error("[repository]: Error creating article");
        console.error(error);
    }
});
exports.createArticle = createArticle;
const getArticles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const articles = yield article_1.default.find().populate("chatHistory");
        return articles;
    }
    catch (error) {
        console.error("[repository]: Error getting articles");
        console.error(error);
    }
});
exports.getArticles = getArticles;
const deleteArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = yield article_1.default.findByIdAndDelete(id);
        return article;
    }
    catch (error) {
        console.error("[repository]: Error deleting article");
        console.error(error);
    }
});
exports.deleteArticle = deleteArticle;
const getArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = yield article_1.default.findById(id);
        return article;
    }
    catch (error) {
        console.error("[repository]: Error getting article");
        console.error(error);
    }
});
exports.getArticle = getArticle;
