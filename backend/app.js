const express = require("express");
const morgan = require("morgan");
const globalErrorHandler = require("./controllers/errorController");
const cors = require("cors");


const filterRoute = require("./routes/filterRoute");
const resetRoute = require("./routes/resetRoute");

const app = express();
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));


app.use("/api/v1/ad", filterRoute);
app.use("/api/v1/reset", resetRoute);

app.all("*", (req, res, next) => {
    console.log("can't find route on this server");
});

app.use(globalErrorHandler);

module.exports = app;
