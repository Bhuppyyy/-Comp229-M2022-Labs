"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayMoviesList = void 0;
const movies_1 = __importDefault(require("../Models/movies"));
function DisplayMoviesList(req, res, next) {
    movies_1.default.find(function (err, moviesCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Movie List', page: 'movie-list', movies: moviesCollection });
    });
}
exports.DisplayMoviesList = DisplayMoviesList;
//# sourceMappingURL=movie-list.js.map