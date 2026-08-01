export const setupSocketHandlers = (io) => {
  io.on('connection', (socket) => {
    console.log(`[WS] Cliente conectado: ${socket.id}`);

    socket.on('subscribe_assembly', ({ assemblyId }) => {
      socket.join(`assembly_${assemblyId}`);
      console.log(`[WS] Cliente ${socket.id} suscrito a la asamblea ${assemblyId}`);
      
      // Enviar actualización inicial de quórum
      socket.emit('QUORUM_UPDATE', {
        assemblyId,
        sharesPresent: 754200.50,
        quorumPercentage: 75.42,
        hasLegalQuorum: true,
        timestamp: new Date().toISOString()
      });
    });

    socket.on('disconnect', () => {
      console.log(`[WS] Cliente desconectado: ${socket.id}`);
    });
  });
};
