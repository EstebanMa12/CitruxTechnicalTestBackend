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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueriesByArticleIdService = exports.deleteQueryService = exports.getQueriesService = exports.createQueryService = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const query_repository_1 = require("../repositories/query.repository");
const createQueryService = (userQuestion, aiResponse, articleId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const querie = (0, query_repository_1.createQuery)(userQuestion, aiResponse, articleId);
        return querie;
    }
    catch (error) {
        console.error("[service]: Error creating querie");
        console.error(error);
    }
});
exports.createQueryService = createQueryService;
const getQueriesService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queries = (0, query_repository_1.getQueries)();
        return queries;
    }
    catch (error) {
        console.error("[service]: Error getting queries");
        console.error(error);
    }
});
exports.getQueriesService = getQueriesService;
const deleteQueryService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const querie = (0, query_repository_1.deleteQuery)(id);
        return querie;
    }
    catch (error) {
        console.error("[service]: Error deleting querie");
        console.error(error);
    }
});
exports.deleteQueryService = deleteQueryService;
const getQueriesByArticleIdService = (articleId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queries = (0, query_repository_1.getQueriesByArticleId)(articleId);
        return queries;
    }
    catch (error) {
        console.error("[service]: Error getting queries by articleId ");
        console.error(error);
    }
});
exports.getQueriesByArticleIdService = getQueriesByArticleIdService;
