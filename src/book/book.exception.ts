import { HttpException, HttpStatus } from "@nestjs/common";

export class BookException extends HttpException {
    constructor() {
        super("This is my Custom Book exception", HttpStatus.BAD_REQUEST)
    }
}