import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class RoleGuard implements CanActivate {
    private rolePassed: string;

    constructor(role : string) {
        this.rolePassed = role;
    }

    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp();
        const request : any = ctx.getRequest<Request>()

        return this.rolePassed == request.user.role
        
    }
}