import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";

@Injectable()
export class AppInterceptor implements NestInterceptor {
        intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
            
            console.log("Inside interceptor")
            const ctx = context.switchToHttp()
            const request = ctx.getRequest<Request>(); 

            request.body.name = "This is the name" // with the help of injectable we are attaching a proprty name 
            request.body.age = 22 // with the help of injectable we are assigning a proprty age  
            return next.handle();
            
        }
}