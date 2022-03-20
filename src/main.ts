import { HttpExceptionFilter } from './common/filter/http-exception.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middleware';
import { ValidationPipe } from './common/pipe/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(logger);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
