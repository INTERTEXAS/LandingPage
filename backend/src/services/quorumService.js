/**
 * Quorum Engine Service
 * Maneja el cálculo dinámico de Quórum Presencial, Remoto y por Poder
 */
export class QuorumService {
  // Simulador de almacenamiento de quórum en memoria (Redis Fallback)
  static quorumStore = new Map();

  static getAssemblyQuorum(assemblyId) {
    if (!this.quorumStore.has(assemblyId)) {
      // Quórum inicial por defecto
      this.quorumStore.set(assemblyId, {
        assemblyId,
        totalShares: 1000000.00,
        sharesPresent: 754200.50,
        quorumPercentage: 75.42,
        minQuorumRequired: 50.01,
        hasLegalQuorum: true,
        shareholderCount: 42,
        updatedAt: new Date().toISOString()
      });
    }
    return this.quorumStore.get(assemblyId);
  }

  static registerCheckIn(assemblyId, userId, sharesRepresented, type = 'REMOTE') {
    const quorum = this.getAssemblyQuorum(assemblyId);
    quorum.sharesPresent += sharesRepresented;
    quorum.quorumPercentage = Number(((quorum.sharesPresent / quorum.totalShares) * 100).toFixed(2));
    quorum.hasLegalQuorum = quorum.quorumPercentage >= quorum.minQuorumRequired;
    quorum.shareholderCount += 1;
    quorum.updatedAt = new Date().toISOString();
    
    this.quorumStore.set(assemblyId, quorum);
    return quorum;
  }
}
