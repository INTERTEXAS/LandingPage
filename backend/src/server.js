import http from 'http';
import { Server } from 'socket.io';
import app from './app.js';
import { config } from './config/env.js';
import { setupSocketHandlers } from './websocket/socketHandler.js';

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: config.corsOrigin,
    methods: ['GET', 'POST']
  }
});

setupSocketHandlers(io);

server.listen(config.port, () => {
  console.log(`==================================================`);
  console.log(`🚀 Plenaria Senior Backend Service ejecutándose en: http://localhost:${config.port}`);
  console.log(`⚡ WebSocket Server habilitado en ws://localhost:${config.port}`);
  console.log(`==================================================`);
});
