import express, { urlencoded, json } from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import routes from '../routes';
import handleErrors from '../middlewares';
import config from '../config';

const app = express();
app.set('case sensitive routing', false);
app.set('strict routing', false);
app.use(helmet());
app.use(compression());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(cors());
app.use(session({
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false,
    saveUninitialized: true,
    secret: config.secret_key,
    store: MongoStore.create({
        mongoUrl: config.mongodb_url,
        dbName: 'mecha-games',
        collectionName: 'charts',
        autoRemove: 'interval',
        autoRemoveInterval: 10,
        touchAfter: 5,
    }),
}));
app.use(routes);
app.use(handleErrors);
export default app;
