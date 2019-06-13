// Fastify framework
const fastify = require('fastify')({
    logger: true
});

// Require mongoose
const mongoose = require('mongoose');

// Connecting to DB
mongoose.connect('mongodb://localhost/mycargarage')
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

module.exports = fastify;
