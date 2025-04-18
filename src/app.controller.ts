import { Controller, Get, Post, UseGuards, Request} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller("app")
export class AppController {
    @Post("login")
    @UseGuards(AuthGuard('local'))
    login(@Request() req) : string {
        return req.user
    }
}

