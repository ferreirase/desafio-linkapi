import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';

export default function verifyAmountIngredients(
  request: Request,
  _: Response,
  next: NextFunction,
): void {
  const ingredientsQuantity = request.query.i?.toString().split(',').length;

  if (ingredientsQuantity !== undefined && ingredientsQuantity > 3) {
    throw new AppError({
      message: `Informe apenas 3 ingredientes.`,
      statusCode: 400,
    });
  }

  return next();
}
