require("dotenv/config");

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/errorHandler.js");

const userRouter = require("./routes/user-route.js");
const productRoute = require("./routes/product-route.js");
const rangeRoute = require("./routes/range-route.js");

require("./db.js");

const port = process.env.PORT || 3000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allow cookies to be sent/received
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/user", userRouter);
app.use("/product", productRoute);
app.use("/range", rangeRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
