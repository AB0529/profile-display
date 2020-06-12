import express from 'express';
import config from './config';
import util from './utils';
import helmet from 'helmet';
import compression from 'compression';
import { readdirSync } from 'fs';

import 'colors';

const app = express();

// Automaticlly import and use routes from the routes directory
const routes_dir = readdirSync(`${__dirname}/Routes`);

// Setup extensions
app.use(helmet());
app.use(compression());
// Log reach incomming request
app.use((req, res, next) => {
	const IP = req.headers['x-forwarded-for'];

	util.log(req.method, `${req.method == 'GET' ? req.path.green : req.path.magenta} from ${IP}`);
	next();
});

routes_dir.map((routes) => {
    // Load the route
    const route = require(`./Routes/${routes}`).default;

    // The type the route is, POST, GET, etc.
    const route_type = route.type;
    const route_name = route.name;

    util.log(`API`, `Loaded ${route_type == 'GET' ? 'GET'.green : 'POST'.magenta}`, route_name.yellow);

    switch (route_type) {
        // Handle GET routes
        case 'GET':
            app.get(`/${route_name}`, (req, res) => route.app(req, res));
        break;
        // Handle POST routes
        case 'POST':
            app.post(`/${route_name}`, (req, res) => route.app(req, res));
    }

});

// Start express app
app.listen(config.server_port, () => {
    util.log(`API`, `Express server listening`, `${config.server_port}`);
});
