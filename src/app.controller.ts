import { Body, Controller, Post, Req, Res, UseInterceptors } from "@nestjs/common";
import { AppInterceptor } from "./app.interceptor";
import { Request, Response } from "express";

@Controller("app")
export class AppController {
    @Post("path")
    @UseInterceptors(AppInterceptor)
    // using express 
    // helloWord(@Req() req : Request, @Res() res : Response) : any {
        
    //     return res.json(req.body)
    // }

// using nestjs 
    helloWord() : any {
        
        return {"message": "This is the response"}
    }
}

