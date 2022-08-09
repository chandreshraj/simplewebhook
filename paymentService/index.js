"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get("/sendPaymentStatus", (req, res) => {
    axios_1.default
        .get("http://localhost:8081/paymentstatus?paymentstatus=SUCCESS&customerid=100")
        .then((response) => {
        console.log(response.data);
        res.send("ACK");
    }).catch((error) => {
        res.send(error.message);
        console.log(error);
    });
});
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
