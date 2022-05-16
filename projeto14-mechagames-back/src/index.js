import app from './app';
import config from './config';
import mongo from './database';

mongo.connect().then(() => {
    console.info('Connected to MongoDB');
    app.listen(config.port, () => {
        console.info(`Listening to port ${config.port}`);
    });
});
