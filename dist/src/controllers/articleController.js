"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getArticleController = exports.deleteArticleController = exports.getArticlesController = exports.createArticleController = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
const article_service_1 = require("./../services/article-service");
const openai_1 = __importDefault(require("openai"));
const axios_1 = __importDefault(require("axios"));
const cheerio = __importStar(require("cheerio"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY
});
const createArticleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url } = req.body;
    try {
        const response = yield axios_1.default.get(url);
        const $ = cheerio.load(response.data);
        const title = $('title').text();
        let content = $('p').text();
        if (content.length > 16000) {
            content = content.substring(0, 16000);
        }
        const article = yield openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are an Article Summarizer AI who will be in charge of providing summaries and answering questions according to the user's needs."
                },
                {
                    role: "system",
                    content: "The following is an article about " + title + ". Please summarize it."
                },
                {
                    role: "user",
                    content: content
                }
            ]
        });
        const responseArticle = yield (0, article_service_1.createArticleService)(url, content, article.choices[0].message.content);
        res.status(200).json(responseArticle);
    }
    catch (error) {
        console.error("[controller]: Error creating article");
        res.status(error.status).json({ message: error.error.message });
    }
});
exports.createArticleController = createArticleController;
const getArticlesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, article_service_1.getArticlesService)();
        res.status(200).json(response);
    }
    catch (error) {
        console.error("[controller]: Error getting articles");
        res.status(error.status).json({ message: error.error.message });
    }
});
exports.getArticlesController = getArticlesController;
const deleteArticleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const response = yield (0, article_service_1.deleteArticleService)(id);
        res.status(200).json(response);
    }
    catch (error) {
        console.error("[controller]: Error deleting article");
        res.status(error.status).json({ message: error.error.message });
    }
});
exports.deleteArticleController = deleteArticleController;
const getArticleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const response = yield (0, article_service_1.getArticleService)(id);
        res.status(200).json(response);
    }
    catch (error) {
        console.error("[controller]: Error getting article", error);
        res.status(500).json({ message: "Error getting article" });
    }
});
exports.getArticleController = getArticleController;
