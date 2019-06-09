// Fastify framework
const fastify = require('fastify')({
    logger: true
})

// Require mongoose
const mongoose = require('mongoose');

// Connecting to DB
mongoose.connect('mongodb://localhost/mycargarage')
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

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