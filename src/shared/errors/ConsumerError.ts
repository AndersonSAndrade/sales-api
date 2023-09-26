import { NextFunction, Request, Response } from 'express';

import AppError from '@shared/errors/AppError';

class ConsumerError {
  public consumer = (
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    next();

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  };
}

export default ConsumerError;
