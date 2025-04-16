import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put } from "@nestjs/common";
import { BookDto } from "./data/book.dto";
import { BookPipe } from "./pipes/book.pipe";

@Controller("book")
export class BookController {
   

    @Get("/:id")
    findBookById(@Param("id", ParseBoolPipe) id : number): string {
        console.log(id, typeof(id));
        return "Book by id";
    }

    @Post("add")
    addBook(@Body(new BookPipe()) book : BookDto) : string {
        return "add book"
    }

}