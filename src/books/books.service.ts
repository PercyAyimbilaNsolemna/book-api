import { BadRequestException, ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Book, BookDocument } from './schemas/books.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
    private readonly logger = new Logger(BooksService.name);
    
    constructor(@InjectModel(Book.name) private booksModel: Model<BookDocument>) {}

    // Create a new book
    async createBook(createBookDto: CreateBookDto): Promise<Book> {
    this.logger.log(`Creating book: ${createBookDto.bookName}`);
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

  // Get all books
  async findAllBooks(): Promise<Book[]> {
    this.logger.log('Fetching all books');
    return this.booksModel
      .find({ availableQuantity: { $gt: 0 } }) // Only books in stock
      .exec();
  }

  // Get book by ID
  async findBookById(id: string): Promise<BookDocument> {
  this.logger.log(`Fetching book by ID: ${id}`);
  // Validate MongoDB ObjectId
  if (!Types.ObjectId.isValid(id)) {
    throw new NotFoundException('Invalid book id');
  }

  const book = await this.booksModel.findById(id).exec();

  if (!book) {
    throw new NotFoundException('Book not found');
  }

  return book;
}

  async updateBook(
    bookID: string,
    updateBookDto: UpdateBookDto,
  ): Promise<Book> {

    this.logger.log(`Updating book ID ${bookID} with data: ${JSON.stringify(updateBookDto)}`);

    
    if (!Types.ObjectId.isValid(bookID)) {
    throw new BadRequestException('Invalid book ID');
    }
    //Check if book exist
    const foundBook = await this.booksModel.findById(bookID);

    if (!foundBook) {
      throw new NotFoundException('The book does not exist in the database');
    }

    const updatedBook = await this.booksModel.findByIdAndUpdate(bookID, updateBookDto, {
      new: true,
    });

    if (!updatedBook) {
      throw new NotFoundException('Failed to update book');
    }

    return updatedBook;
  }
}