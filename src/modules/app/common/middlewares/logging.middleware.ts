import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: FastifyRequest, res: FastifyReply<any>, next: () => void) {
    // tslint:disable
    // console.log('Request...', req);

    console.log(req.body, req.query, req.params);

    next();
  }
}
