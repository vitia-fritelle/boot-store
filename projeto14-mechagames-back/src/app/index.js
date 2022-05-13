import express from "express";
import {json} from "express";
import mongoSanitize from "express-mongo-sanitize";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import routes from "../routes";

const app = express();

app.use(helmet());
app.use(json());
app.use(mongoSanitize());
app.use(compression());
app.use(cors());
app.use(routes);
app.set("case sensitive routing", false);
app.set("strict routing", false);
export default app;
