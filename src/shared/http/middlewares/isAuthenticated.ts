import AppError from '@shared/errors/AppError';
import SecurityUtil from '@shared/utility/security';
import { NextFunction, Request, Response } from 'express';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

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
    const decodedToken = await security.verify(token);
    const { sub } = decodedToken as ITokenPayload;
    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Token invalido');
  }
}
