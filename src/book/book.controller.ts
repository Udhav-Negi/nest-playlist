import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, ValidationPipe } from "@nestjs/common";
import { BookDto } from "./data/book.dto";

@Controller("book")
export class BookController {
   

    @Get("/:id")
    findBookById(@Param("id", ParseBoolPipe) id : number): string {
        console.log(id, typeof(id));
        return "Book by id";
    }

    @Post("add")
    addBook(@Body(new ValidationPipe()) book: BookDto) : string {
        return "add book"
    }

}