import { BadRequestException, Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, UseFilters, ValidationPipe } from "@nestjs/common";
import { BookDto } from "./data/book.dto";
import { BookException } from "./book.exception";
import { BookCustomExceptionFilter } from "./book.exception.filter";

@Controller("book")
export class BookController {
   

    @Get("")
    @UseFilters(BookCustomExceptionFilter)
    helloBookApi(): string {
        throw new BadRequestException()

    }

    
}