import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UsersGuard } from "./users/guards/users.guards";

@Controller("app")
export class AppController {
    @Get() 
    @UseGuards(AuthGuard('local'))
    getHello() : string {
        return "This is private data"
    }

    @Post()
    @UseGuards(UsersGuard)
    checkPostRequest() {
        return "response from check post request"
    }
}

