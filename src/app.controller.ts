import { Controller, Get, Post, UseGuards, Request} from "@nestjs/common";

@Controller("app")
export class AppController {

    @Get()
    getHello() : string {
        return "Hello world"
    }
    
}

