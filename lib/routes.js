const bookController = require('../controllers/bookController');

function register(server) {
    server.route([
        {
            method: 'GET',
            path: '/api/kirja/{id?}',
            handler: bookController.getHandler
        },{
            method: 'POST',
            path: '/api/kirja',
            handler: bookController.postHandler
        }
    ]);
}

module.exports = {
    register: register
}