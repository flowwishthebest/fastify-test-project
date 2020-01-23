import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './modules/app/app.module';
import { LoggerMiddleware } from './modules/app/common/middlewares/logging.middleware';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const adapter = new FastifyAdapter();
  const server = adapter.getInstance();

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    adapter,
  );

  const logMiddleware = app.get(LoggerMiddleware);
  server.addHook('preHandler', logMiddleware.use.bind(logMiddleware));

  app.listen(PORT, '0.0.0.0', () => {
    // tslint:disable-next-line
    console.log('Bootstrap. App started on http://localhost:' + PORT);
  });
}

bootstrap()
  .catch((err) => {
    // tslint:disable-next-line
    console.log('Bootstrap error.', err);
  });
