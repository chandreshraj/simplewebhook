import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import axois from "axios";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/sendPaymentStatus", (req: Request, res: Response) => {
  axois
    .get(
      "http://localhost:8081/paymentstatus?paymentstatus=SUCCESS&customerid=100"
    )
    .then((response) => {
        console.log(response.data);        
        res.send("ACK");
    }).catch((error) => {
        res.send(error.message)
        console.log(error);
    });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
