import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class BookGuard implements CanActivate {
    public key : string = "sdvhjbdsj";
    public username: string = "notezz"
    public password : string = "1234"

    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp()
        const request = ctx.getRequest<Request>(); // request will work same as request object of express

        if(request.header("username") == undefined || request.header("password") == undefined) return false;
        
        return request.header("username") == this.username && request.header("password") == this.password;
    }
}