import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";


@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
    // validate(...args: any): any {
    validate(username : string, password : string): any {
        return {username : "udhav negi", password : "123"}
    }
}