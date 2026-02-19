import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

describe('BooksController', () => {
  let controller: BooksController;
  let service: BooksService;

  /**
   * Mock service methods
   */
  const mockBooksService = {
    createBook: jest.fn(),
    findAllBooks: jest.fn(),
    findBookById: jest.fn(),
    updateBook: jest.fn(),
    deleteBook: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        {
          provide: BooksService,
          useValue: mockBooksService,
        },
      ],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);

    jest.clearAllMocks();
  });

  // ------------------------------------------------
  // CREATE BOOK
  // ------------------------------------------------
  describe('create', () => {
    it('should create a book', async () => {
      const dto = {
        bookName: 'Controller Test',
        bookCategory: 'Tech',
        bookPrice: 40,
        bookDescription: 'Testing controller',
      };

      const createdBook = {
        _id: '123',
        ...dto,
        availableQuantity: 1,
      };

      mockBooksService.createBook.mockResolvedValue(createdBook);

      const result = await controller.create(dto as any);

      expect(service.createBook).toHaveBeenCalledWith(dto);
      expect(result.bookName).toEqual('Controller Test');
    });
  });

  // ------------------------------------------------
  // GET ALL BOOKS
  // ------------------------------------------------
  describe('findAllBooks', () => {
    it('should return all books', async () => {
      const books = [
        { bookName: 'Book One', availableQuantity: 2 },
        { bookName: 'Book Two', availableQuantity: 1 },
      ];

      mockBooksService.findAllBooks.mockResolvedValue(books);

      const result = await controller.findAllBooks();

      expect(service.findAllBooks).toHaveBeenCalled();
      expect(result).toHaveLength(2);
    });
  });

  // ------------------------------------------------
  // GET BOOK BY ID
  // ------------------------------------------------
  describe('findBook', () => {
    it('should return a single book', async () => {
      const bookId = '69961f858bc13510f164da47';

      const book = {
        _id: bookId,
        bookName: 'Single Book',
        bookCategory: 'Drama',
        bookPrice: 20,
        bookDescription: 'Controller test',
      };

      mockBooksService.findBookById.mockResolvedValue(book);

      const result = await controller.findBook(bookId);

      expect(service.findBookById).toHaveBeenCalledWith(bookId);
      expect(result.bookName).toEqual('Single Book');
    });
  });

  describe('BooksController', () => {
  let controller: BooksController;
  let service: BooksService;

  const mockBooksService = {
    updateBook: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [{ provide: BooksService, useValue: mockBooksService }],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);

    jest.clearAllMocks();
  });

  describe('updateBook', () => {
    const bookID = '69961f858bc13510f164da47';
    const updateBookDto = { bookPrice: 55, availableQuantity: 5 };

    it('should call service.updateBook and return updated book', async () => {
      const updatedBook = { _id: bookID, bookName: 'Test Book', ...updateBookDto };
      mockBooksService.updateBook.mockResolvedValue(updatedBook);

      const result = await controller.updateBook(bookID, updateBookDto as any);

      expect(mockBooksService.updateBook).toHaveBeenCalledWith(bookID, updateBookDto);
      expect(result.bookPrice).toEqual(55);
      expect(result.availableQuantity).toEqual(5);
    });
  });
});

describe('deleteBook', () => {
  const bookID = '69961f858bc13510f164da47';

  it('should call service.deleteBook and return deleted book', async () => {
    const deletedBook = { _id: bookID, bookName: 'Deleted Book' };
    mockBooksService.deleteBook.mockResolvedValue(deletedBook);

    const result = await controller.deleteBook(bookID);

    expect(mockBooksService.deleteBook).toHaveBeenCalledWith(bookID);
    expect((result as any)._id).toEqual(bookID);
    expect(result.bookName).toEqual('Deleted Book');
  });
});


});
