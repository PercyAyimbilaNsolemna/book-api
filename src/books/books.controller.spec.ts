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

});
