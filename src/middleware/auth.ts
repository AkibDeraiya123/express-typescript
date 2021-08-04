import { Request, Response, NextFunction } from 'express';

export function authMiddleware(
  req: Partial<Request>,
  res: Partial<Response>,
  next: NextFunction
): void {
  try {
    if (req.session?.authUser) {
      next()
    } else {
      throw {
        message: "Not Authorised"
      }
    }
  } catch (err) {
    res.status?.(401).send({ code: 401, error: err.message });
  }
}