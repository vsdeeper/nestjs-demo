import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './core/interceptor/transform/transform.interceptor';
import { HttpExceptionFilter } from './core/filter/http-exception/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 注册拦截器和过滤器
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  // 设置文档
  const config = new DocumentBuilder()
    .setTitle('管理后台')
    .setDescription('演示管理后台接口文档')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const docs = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, docs);

  await app.listen(3000);
}
bootstrap();
