import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // strips extra fields
    forbidNonWhitelisted: true, // throws error if extra fields exist
    transform: true, // converts payload to DTO class
  }));

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    maxAge: 3600,
  });

  const port = process.env.PORT ?? 3000;

  await app.listen(port);

  console.log(`
  🚀  Server is running!
  📭  Query at ${port}
  `);
}
bootstrap();
