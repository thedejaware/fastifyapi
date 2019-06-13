// Import Server
const fastify = require('./server.js');

// Rquire routes
const routes = require('./routes');


// Import Swagger Options
const swagger = require('./config/swagger');

// Register swagger
fastify.register(require('fastify-swagger'), swagger.options);


// Looping over all routes
routes.forEach((route, index) => {
    fastify.route(route);
});
// Routing
fastify.get('/', async (request, response) => {
    return { status: 'Server is running' }
});

// Starting the server
const start = async () => {
    try {
        await fastify.listen(3001, '0.0.0.0');
        // Initialize swagger
        fastify.swagger(); // http://localhost:3001/documentation API Documentation
        fastify.log.info(`Server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();