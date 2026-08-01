import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';

export class AuthController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: 'BadRequest', message: 'Se requieren email y contraseña' });
      }

      // Demo de autenticación Senior Backend
      const mockUser = {
        id: 'usr_882910',
        fullName: 'Accionista Demo',
        email: email,
        role: 'SHAREHOLDER',
        sharesRepresented: 15400.00
      };

      const token = jwt.sign(
        { id: mockUser.id, email: mockUser.email, role: mockUser.role },
        config.jwtSecret,
        { expiresIn: '8h' }
      );

      return res.status(200).json({
        message: 'Autenticación exitosa',
        token,
        user: mockUser
      });
    } catch (err) {
      next(err);
    }
  }

  static async getProfile(req, res, next) {
    try {
      return res.status(200).json({ user: req.user });
    } catch (err) {
      next(err);
    }
  }
}
