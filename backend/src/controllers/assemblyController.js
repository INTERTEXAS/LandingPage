import { QuorumService } from '../services/quorumService.js';

export class AssemblyController {
  static async getQuorum(req, res, next) {
    try {
      const { id } = req.params;
      const quorum = QuorumService.getAssemblyQuorum(id);
      return res.status(200).json(quorum);
    } catch (err) {
      next(err);
    }
  }

  static async registerAttendance(req, res, next) {
    try {
      const { id } = req.params;
      const { userId, sharesRepresented, type } = req.body;

      if (!userId || sharesRepresented === undefined || typeof sharesRepresented !== 'number' || sharesRepresented <= 0) {
        return res.status(400).json({
          error: 'BadRequest',
          message: 'Se requiere userId y un número válido positivo en sharesRepresented'
        });
      }

      const updatedQuorum = QuorumService.registerCheckIn(id, userId, sharesRepresented, type);
      return res.status(200).json({
        message: 'Asistencia registrada con éxito',
        quorum: updatedQuorum
      });
    } catch (err) {
      next(err);
    }
  }
}
