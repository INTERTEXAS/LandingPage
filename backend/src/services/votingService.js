import { CryptoService } from './cryptoService.js';

/**
 * Voting Processor Service
 * Procesamiento transaccional de votos ponderados
 */
export class VotingService {
  static votesStore = [];

  static castVote({ agendaItemId, userId, optionSelected, weightApplied }) {
    // Validar si ya existe un voto registrado para este usuario en este punto del día
    const existingVote = this.votesStore.find(v => v.agendaItemId === agendaItemId && v.userId === userId);
    if (existingVote) {
      const error = new Error('El usuario ya ha emitido su voto para este punto del día');
      error.statusCode = 409;
      throw error;
    }

    const timestamp = new Date().toISOString();
    const hashSignature = CryptoService.generateVoteHash({
      agendaItemId,
      userId,
      optionSelected,
      weightApplied,
      timestamp
    });

    const voteRecord = {
      voteId: `vote_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      agendaItemId,
      userId,
      optionSelected,
      weightApplied,
      hashSignature,
      timestamp,
      status: 'REGISTERED'
    };

    this.votesStore.push(voteRecord);
    return voteRecord;
  }

  static getTally(agendaItemId) {
    const itemVotes = this.votesStore.filter(v => v.agendaItemId === agendaItemId);
    const summary = {
      agendaItemId,
      totalVotes: itemVotes.length,
      approveWeight: 0,
      rejectWeight: 0,
      abstainWeight: 0
    };

    itemVotes.forEach(v => {
      if (v.optionSelected === 'APPROVE') summary.approveWeight += v.weightApplied;
      else if (v.optionSelected === 'REJECT') summary.rejectWeight += v.weightApplied;
      else if (v.optionSelected === 'ABSTAIN') summary.abstainWeight += v.weightApplied;
    });

    return summary;
  }
}
