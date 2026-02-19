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
});
