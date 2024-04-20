import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['GET', 'HEAD', 'POST', 'PATCH', 'DELETE'],
  });
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Go lembrar API')
    .setDescription('GO Lembrar é uma aplicação para gerenciar lembretes.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT;
  app.listen(port, '0.0.0.0').then(() => {
    const logger = new Logger(bootstrap.name);
    logger.log('Server listening on ' + port);
  });
}
bootstrap();
