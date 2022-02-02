import express from "express";
import { DATABASE_URL, PORT, NODE_ENV } from "./config/config";
import { connectToDatabase } from "./database/connection";
import route from "./api/routes/index";
import "core-js/stable";
import "regenerator-runtime/runtime";
import logger from "./utils/logger";

const app = express();

app.use(express.json());

connectToDatabase(DATABASE_URL);

app.use("/", route);

app.listen(PORT || 3004, () => logger.info(`server running on port ${PORT}`));

export default app;
