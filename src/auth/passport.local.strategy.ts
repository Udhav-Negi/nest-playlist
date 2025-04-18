import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/users/user.entity";
import { UserService } from "src/users/user.service";

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly useService : UserService) {
        super()
    }

    validate(username : string, password : string): any {
        const user = this.useService.getUserByName(username);
        if(user == undefined) throw new UnauthorizedException()
        if(user.password == password)
            return user;
    }
}