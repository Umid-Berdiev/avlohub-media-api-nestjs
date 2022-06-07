import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class IsAdminMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('isAdmin middleware is running...');
    const user = User.findById(req.user.id);
    if (req.user.roles.includes('Admin')) {
      next();
    }
    res.sendStatus(401);
  }
}
