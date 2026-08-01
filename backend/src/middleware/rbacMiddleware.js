export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        error: 'Forbidden',
        message: `El rol '${req.user?.role || 'Desconocido'}' no posee privilegios para ejecutar esta acción.`
      });
    }
    next();
  };
};
