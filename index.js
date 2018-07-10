'use strict';

const Hapi = require('hapi');
const Good = require('good');
const routes = require('./lib/routes');

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const init = async function() {
    // Force server to run on fixed port 8080
    const server = new Hapi.Server({
        port: 8080    
    });

    // Register logging modules
    await server.register([
        {
            plugin: Good,
            options: {
                ops: {
                    interval: 300000
                },
                reporters: {
                    logReporter: [{
                        module: 'good-squeeze',
                        name: 'Squeeze',
                        args: [{ 
                            ops: '*',
                            info: '*',
                            response: '*',
                            error: '*'
                        }]
                    },{
                        module: 'good-squeeze',
                        name: 'SafeJson'
                    },{
                        module: 'good-file',
                        args: [ './logs/app.log' ]
                    }]
                }
            }
        }
    ]);

    // Register routes
    routes.register( server );

    // Start server
    await server.start();
    return server;
};

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Program execution starts here
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
init().then((server) => {
    console.log('Server running on '+server.info.host+':'+server.info.port);
});