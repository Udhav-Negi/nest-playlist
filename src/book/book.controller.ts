import { BadRequestException, Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, UseFilters, UseGuards, ValidationPipe } from "@nestjs/common";
import { BookDto } from "./data/book.dto";
import { BookException } from "./book.exception";
import { BookCustomExceptionFilter } from "./book.exception.filter";
import { BookGuard } from "./book.guard";

@Controller("book")
export class BookController {
   

    @Get("findAll")
    findAllBooks(): string {
        return " This api returns all books"
    }

    @Post("add")
    addBook() : string {
        return "This api will add book"
    }
}