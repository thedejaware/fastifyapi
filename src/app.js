// Fastify framework
const fastify = require('fastify')({
    logger: true
})

// Routing
fastify.get('/', async (request, response) => {
    return { status: 'Server is running' }
});

// Starting the server
const start = async () => {
    try {
        await fastify.listen(3001);
        fastify.log.info(`Server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();