const { create, jsonMiddleware } = require('slspress');

const handler = create();

handler.on('handle')
    .middleware(jsonMiddleware)
    .get('/hello-world', (req, res) => {
        return res.ok('hello-world,How are you');
    });

module.exports = handler.export();
