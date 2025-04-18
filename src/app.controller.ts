import { Controller, Get, Post, UseGuards, Request} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth/auth.service";
import { RoleGuard } from "./role.guard";
import { CONSTANTS } from "./constants";

@Controller("app")
export class AppController {

    constructor(private readonly authService : AuthService) {

    }

    @Post("login")
    @UseGuards(AuthGuard('local'))
    login(@Request() req) : string {
        // authentication completed 
        // nest step authorize
        const token = this.authService.generateToken(req.user)
        // return req.user
        return token
    }

    @Get("android-dev")
    @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
    androidDeveloperData(@Request() req) : string {
        return "This is private data for android developer " + JSON.stringify(req.user)
    }

    @Get("web-dev")
    @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
    webDeveloperData() : string {
        return "This is private data for web developer"
    }
}

