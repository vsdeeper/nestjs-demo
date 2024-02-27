import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  // 处理正常请求的拦截
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ectx = context.switchToHttp();
    const response = ectx.getResponse();
    console.log(11111, response.statusCode);
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          code: 0,
          msg: '请求成功',
        };
      }),
    );
  }
}
