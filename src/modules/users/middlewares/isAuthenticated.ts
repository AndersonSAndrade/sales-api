import AppError from '@shared/errors/AppError';
import SecurityUtil from '@shared/utility/security';
import { NextFunction, Request, Response } from 'express';

export default async function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const authorization = request.headers.authorization;
  const security = new SecurityUtil();

  if (!authorization) {
    throw new AppError('JWT Token não existe na requisição');
  }

  const [, token] = authorization.split(' ');

  try {
    const decodeToken = await security.verify(token);
    return next();
  } catch {
    throw new AppError('Token invalido');
  }
}
