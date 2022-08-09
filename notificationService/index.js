"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
let paymentSuccessStatusMap = new Map();
let paymentFailureStatusMap = new Map();
app.get("/paymentstatus", (req, res) => {
    const { paymentstatus, customerid } = req.query;
    console.log(paymentstatus, customerid);
    if (paymentstatus) {
        req.query.paymentstatus === "SUCCESS"
            ? paymentSuccessStatusMap.set(customerid, {
                customerid: customerid,
                paymentstatus: paymentstatus,
            })
            : paymentFailureStatusMap.set(customerid, {
                customerid: customerid,
                paymentstatus: paymentstatus,
            });
    }
    console.log(paymentSuccessStatusMap);
    console.log(paymentFailureStatusMap);
    res.send(" Payment : " + paymentstatus + " for customer Id : " + customerid);
});
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
