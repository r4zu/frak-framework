import Frak from 'frak';

/**
 * Main application skeleton
 */

// Initialize Frak application
const app = await Frak.initialize();

// Create server instance with specified options
const server = await app.createServer({
  name: 'new-app',
  routesRootDir: 'routes',
  port: 9000,
});

// Root View
server.addClientView('/', 'frak', {
  title: 'Frak',
});

server.addStaticDirectory('/static', 'static');
