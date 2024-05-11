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
exports.getQueriesByArticleId = exports.deleteQuery = exports.getQueries = exports.createQuery = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const query_1 = __importDefault(require("../models/query"));
const createQuery = (userQuestion, aiResponse, articleId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const querie = new query_1.default({ userQuestion, aiResponse, articleId, createdAt: new Date() });
        yield querie.save();
        return querie;
    }
    catch (error) {
        console.error("[repository]: Error creating querie");
        console.error(error);
    }
});
exports.createQuery = createQuery;
const getQueries = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queries = yield query_1.default.find();
        return queries;
    }
    catch (error) {
        console.error("[repository]: Error getting queries");
        console.error(error);
    }
});
exports.getQueries = getQueries;
const deleteQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const querie = yield query_1.default.findByIdAndDelete(id);
        return querie;
    }
    catch (error) {
        console.error("[repository]: Error deleting querie");
        console.error(error);
    }
});
exports.deleteQuery = deleteQuery;
const getQueriesByArticleId = (articleId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queries = yield query_1.default.find({ articleId });
        return queries;
    }
    catch (error) {
        console.error("[repository]: Error getting queries by articleId");
        console.error(error);
    }
});
exports.getQueriesByArticleId = getQueriesByArticleId;
