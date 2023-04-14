"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const db_json_1 = __importDefault(require("./db.json"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/page-find", (req, res) => {
    try {
        const { firstCategory } = req.body;
        const response = db_json_1.default.page[firstCategory].find;
        return res.status(200).json(response);
    }
    catch (error) {
        const result = error;
        return res.status(400).json(result.message);
    }
});
app.post("/product-find", (req, res) => {
    try {
        const { category } = req.body;
        const response = db_json_1.default.product.filter((c) => c._id == category);
        return res.status(200).json(response);
    }
    catch (error) {
        const result = error;
        return res.status(400).json(result.message);
    }
});
app.get("/", (req, res) => {
    try {
        const response = db_json_1.default.productPage.find((c) => c._id === req.params.id);
        return res.status(200).json(response);
    }
    catch (error) {
        const result = error;
        return res.status(400).json(result.message);
    }
});
const PORT = process.env.PORT || 4100;
function appStart() {
    try {
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    }
    catch (error) {
        console.log(error);
    }
}
appStart();
