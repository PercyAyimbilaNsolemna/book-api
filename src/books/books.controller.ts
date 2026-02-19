import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './schemas/books.schema';
import { UpdateBookDto } from './dto/update-book.dto';
import { ParseObjectIdPipe } from '@nestjs/mongoose';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return await this.booksService.createBook(createBookDto);
  }

  @Get()
  async findAllBooks(): Promise<Book[]> {
    return this.booksService.findAllBooks();
  }

  @Get(':bookID')
  async findBook(@Param('bookID') bookID: string): Promise<Book> {
    return await this.booksService.findBookById(bookID);
  }

  @Patch(':id')
  async updateBook(
    @Param('id', new ParseObjectIdPipe()) id: string,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    return this.booksService.updateBook(id, updateBookDto);
  }

  @Delete(':id')
  async deleteBook(
    @Param('id', new ParseObjectIdPipe()) id: string
  ): Promise<Book> {
    return this.booksService.deleteBook(id);
  }

}