import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookMiddleware } from "./data/book.middleware";

@Module({
    imports: [], 
    controllers: [BookController], 
    providers: [], 
    exports: [] 
})
export class BookModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(BookMiddleware).forRoutes("book")
    }
}