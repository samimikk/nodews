const bookController = require('../controllers/bookController');

function register(server) {
    server.route([
        {
            method: 'GET',
            path: '/api/book/{id?}',
            handler: bookController.getHandler
        },{
            method: 'POST',
            path: '/api/book',
            handler: bookController.postHandler
        }
    ]);
}

module.exports = {
    register: register
}
