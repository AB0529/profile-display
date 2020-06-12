import express from 'express';
import config from './config';
import util from './utils';

const app = express();

// Test routes
app.get('/test', (req, res) => {
    res.send('Ayyy');
});

// Start express app
app.listen(config.server_port, () => {
    util.log(`API`, `Express server listening`, `${config.server_port}`);
});
