import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

let paymentSuccessStatusMap: Map<string, object> = new Map();
let paymentFailureStatusMap: Map<string, object> = new Map();

interface Ipayment {
  paymentstatus: string;
  customerid: string;
}

app.get(
  "/paymentstatus",
  (req: Request<{}, {}, {}, Ipayment>, res: Response) => {
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
    res.send(
      " Payment : " + paymentstatus + " for customer Id : " + customerid
    );
  }
);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
