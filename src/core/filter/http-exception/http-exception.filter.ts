import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(
    exception: HttpException /** 捕获http抛出的异常 */,
    host: ArgumentsHost,
  ) {
    const ctx = host.switchToHttp();
    // const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    // 设置错误信息
    const message = exception.message
      ? exception.message
      : `${status >= 500 ? 'Service Error' : 'Client Error'}`;
    const errorResponse = { data: null, message, code: status };

    response
      .status(status)
      // .setHeader('Content-Type', 'application/json; charset=utf-8')
      .send(errorResponse);
  }
}
