import { Module } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/logging.middleware';

@Module({
  providers: [LoggerMiddleware],
  exports: [LoggerMiddleware],
})
export class CommonModule {}
