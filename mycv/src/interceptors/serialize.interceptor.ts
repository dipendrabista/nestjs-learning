import {
    CallHandler,
    ExecutionContext,
    NestInterceptor,
    UseInterceptors,
} from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { Observable, map } from "rxjs";

interface ClassConstructor {
  new (...args: any[]): {};
}

//custom decorators

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInteceptor(dto));
}

export class SerializeInteceptor implements NestInterceptor {
  constructor(private dto: any) {}
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    return handler.handle().pipe(
      map((data: any) => {
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
