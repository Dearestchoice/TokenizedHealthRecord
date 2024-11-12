const express =  require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("./middlewares/logger");
const router = require("./routes/index");


const app = express();
const port = 5500;



app.use(cors({origin: "*",credentials: true, // Important for cookies, authorization headers with HTTPS
methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], allowedHeaders: ["Origin",
"Content-Type", "Accept", "Authorization", "X-Request-With"]}));
app.use(bodyParser.json());
app.use(logger);
app.use("/api/v1", router);


app.get('/api/v1', (req, res) => {
    res.status(200).json("Welcome to TokenizedHealthRecords");
});


app.listen(port, () => {
    console.log(`TokenizedHealthRecords server is running on port ${port}`);
});