"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const MovieSchema = new Schema({
    Name: String,
    Year: String,
    Director: String,
    Rating: String
}, {
    collection: "movies"
});
const Model = mongoose_1.default.model("Movie", MovieSchema);
exports.default = Model;
//# sourceMappingURL=movies.js.map