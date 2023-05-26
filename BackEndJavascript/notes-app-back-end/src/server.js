const Hapi = require('@hapi/hapi');
// eslint-disable-next-line import/no-extraneous-dependencies
const HapiCors = require('hapi-cors');
const route = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route(route);

  await server.register({
    plugin: HapiCors,
    options: {
      origins: ['*'], // Allow all origins, you can specify specific origins as well
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
