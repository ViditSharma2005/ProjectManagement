import express from "express";
import cors from "cors";

const app = express();

//basic configurations
//middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//cors configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

//import routes
import healthCheckRouter from "./routes/healthcheck.routs.js";

app.use("/api/v1/healthcheck", healthCheckRouter);

app.get("/", (req, res) => {
  res.send("Welcome basecampy");
});
app.get("/insta", (req, res) => {
  res.send("This is an instagram page");
});

export default app;
