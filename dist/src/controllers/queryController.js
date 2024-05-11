"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueriesByArticleIdController = exports.deleteQueryController = exports.getQueriesController = exports.createQueryController = void 0;
const query_service_1 = require("../services/query-service");
const article_service_1 = require("../services/article-service");
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openai = new openai_1.default({
    organization: process.env.ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY
});
const createQueryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userQuestion, articleId } = req.body;
    try {
        const article = yield (0, article_service_1.getArticleService)(articleId);
        if (!article) {
            return res.status(404).send("Article not found");
        }
        const airesponse = yield openai.chat.completions.create({
            messages: [{
                    role: "system",
                    content: `You are a helpful assistant for an article about ${article === null || article === void 0 ? void 0 : article.content}`
                },
                userQuestion,],
            model: "gpt-3.5-turbo"
        });
        const response = yield (0, query_service_1.createQueryService)(userQuestion, {
            role: "CitruxSystem",
            content: airesponse.choices[0].message.content
        }, articleId);
        res.status(200).json(response);
    }
    catch (error) {
        console.error("[controller]: Error creating query");
        res.status(error.status).json({ message: error.error.message });
    }
});
exports.createQueryController = createQueryController;
const getQueriesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, query_service_1.getQueriesService)();
        res.status(200).json(response);
    }
    catch (error) {
        console.error("[controller]: Error getting queries");
        res.status(error.status).json({ message: error.error.message });
    }
});
exports.getQueriesController = getQueriesController;
const deleteQueryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const response = yield (0, query_service_1.deleteQueryService)(id);
        res.status(200).json(response);
    }
    catch (error) {
        console.error("[controller]: Error deleting querie", error);
        res.status(error.status).json({ message: error.error.message });
    }
});
exports.deleteQueryController = deleteQueryController;
const getQueriesByArticleIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { articleId } = req.params;
    try {
        const response = yield (0, query_service_1.getQueriesByArticleIdService)(articleId);
        res.status(200).json(response);
    }
    catch (error) {
        console.error("[controller]: Error getting queries by articleId", error);
        res.status(error.status).json({ message: error.error.message });
    }
});
exports.getQueriesByArticleIdController = getQueriesByArticleIdController;
