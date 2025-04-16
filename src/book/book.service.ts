import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import {v4 as uuidv4} from "uuid"

@Injectable()
export class BookService {
    public books: Book[] = []

    // add book 
    addBookService(book: Book): string {
        // id auto generated
        book.id = uuidv4();
        this.books.push(book);
        return "Book successfully added"
    }

    // update book 
    updateBookService(book: Book): string {
        let index = this.books.findIndex((currentBook) => currentBook.id == book.id )

        this.books[index] = book;
        return "Book has been updated"
    }

    // delete book 
    deleteBookService(id: string): string {
        this.books = this.books.filter(currBook => currBook.id != id);

        return "Book has benn deleted"

    }

    // find all books 
    findAllBooks(): Book[] {
        return this.books;
    }
}