import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

export class UsersGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp()
        const request = ctx.getRequest<Request>();
        const response = ctx.getRequest<Response>();
        console.log('inside guards');
        if(request.headers.udhav == "udhav")
        return true;
        return false;
    }
}