import crypto from 'crypto';

/**
 * Servicio Criptográfico de no repudio para votos y actas
 */
export class CryptoService {
  /**
   * Genera una firma SHA-256 única para un voto emitido
   */
  static generateVoteHash({ agendaItemId, userId, optionSelected, weightApplied, timestamp }) {
    const payload = `${agendaItemId}:${userId}:${optionSelected}:${weightApplied}:${timestamp}`;
    return crypto.createHash('sha256').update(payload).digest('hex');
  }

  /**
   * Genera un sello de tiempo criptográfico para actas de asamblea
   */
  static generateActaSeal(assemblyId, votesList = []) {
    const sortedVotes = [...votesList].sort((a, b) => (a.timestamp || '').localeCompare(b.timestamp || ''));
    const votesConcat = sortedVotes.map(v => v.hashSignature).join('|');
    return crypto.createHash('sha256').update(`ASSEMBLY:${assemblyId}:${votesConcat}`).digest('hex');
  }
}
