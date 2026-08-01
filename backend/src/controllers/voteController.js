import { VotingService } from '../services/votingService.js';

export class VoteController {
  static async castVote(req, res, next) {
    try {
      const { agendaItemId, optionSelected, weightApplied } = req.body;
      const userId = req.user.id;

      const validOptions = ['APPROVE', 'REJECT', 'ABSTAIN'];
      if (!agendaItemId || !optionSelected || !validOptions.includes(optionSelected)) {
        return res.status(400).json({
          error: 'BadRequest',
          message: `Se requiere agendaItemId y optionSelected válido (${validOptions.join(', ')})`
        });
      }

      if (weightApplied !== undefined && (typeof weightApplied !== 'number' || weightApplied <= 0)) {
        return res.status(400).json({
          error: 'BadRequest',
          message: 'El peso numérico del voto (weightApplied) debe ser mayor a 0'
        });
      }

      const voteRecord = VotingService.castVote({
        agendaItemId,
        userId,
        optionSelected,
        weightApplied: weightApplied || 1000
      });

      return res.status(201).json({
        message: 'Voto ponderado registrado de forma inmutable',
        vote: voteRecord
      });
    } catch (err) {
      next(err);
    }
  }

  static async getTally(req, res, next) {
    try {
      const { agendaItemId } = req.params;
      const tally = VotingService.getTally(agendaItemId);
      return res.status(200).json(tally);
    } catch (err) {
      next(err);
    }
  }
}
