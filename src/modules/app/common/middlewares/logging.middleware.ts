import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: FastifyRequest, res: FastifyReply<any>, next: () => void) {
    // tslint:disable-next-line
    console.log('got request', req.ip);

    next();
  }
}
