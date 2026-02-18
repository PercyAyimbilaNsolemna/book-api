import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './schemas/books.schema';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
    constructor(@InjectModel(Book.name) private booksModel: Model<BookDocument>) {}

    // Create a new book
    async createBook(createBookDto: CreateBookDto): Promise<Book> {
    //Checks if book already exist
    const foundBook = await this.booksModel.findOne({
      bookName: createBookDto.bookName,
    });

    //Throws conflict exception if book already exist
    if (foundBook) {
    throw new ConflictException(
        `Book with title ${createBookDto.bookName} already exists`,
    );
    }

    return await new this.booksModel(createBookDto).save();
  }

}