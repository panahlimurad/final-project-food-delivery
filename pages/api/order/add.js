import { METHOD } from "../../../server/constant/method";
import { ROUTER } from "../../../server/constant/router";
import { handlerAddOrderPOST } from "../../../server/routes/order";

export default async function handler(req, res) {
    console.log(req.body);
    // Set CORS headers to allow requests from any origin
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Set other CORS headers as needed (e.g., methods, headers, etc.)
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    switch (req.method) {
        case METHOD.POST:
            await handlerAddOrderPOST(req, res, ROUTER.ORDER);
            return;
        default:
            res.status(405).end();
    }
}