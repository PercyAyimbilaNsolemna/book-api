import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { BooksService } from './books.service';
import { ConflictException} from '@nestjs/common';

describe('BookService', () => {
  let service: BooksService;

  /**
   * mockBookModel acts as both:
   * 1. A constructor: new this.booksModel(createBookDto) → returns { save: saveMock }
   * 2. A static method holder: this.booksModel.findOne(), findById(), etc.
   */
  const mockBookModel = jest.fn();

  // --- Individual mock functions for mongoose methods ---
  const saveMock = jest.fn();
  const findOneMock = jest.fn();
  const findByIdMock = jest.fn();
  const findByIdAndUpdateMock = jest.fn();
  const findByIdAndDeleteMock = jest.fn();
  const findMock = jest.fn();

  beforeEach(async () => {
    /**
     * When `new this.booksModel(dto)` is called inside the service,
     * return an object with a save() method so we can track it
     */
    mockBookModel.mockImplementation(() => ({
      save: saveMock,
    }));

    /**
     * Attach static mongoose methods directly onto the mock constructor.
     * These simulate Model.findOne(), Model.findById(), etc.
     */
    (mockBookModel as any).findOne = findOneMock;
    (mockBookModel as any).findById = findByIdMock;
    (mockBookModel as any).findByIdAndUpdate = findByIdAndUpdateMock;
    (mockBookModel as any).findByIdAndDelete = findByIdAndDeleteMock;
    (mockBookModel as any).find = findMock;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          // Tell NestJS to use our mockBookModel wherever Book model is injected
          provide: getModelToken('Book'),
          useValue: mockBookModel,
        },
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);

    // Reset all mocks before each test to avoid state leaking between tests
    jest.clearAllMocks();
  });

  // -------------------------------------------------------
  // createBook
  // -------------------------------------------------------
  describe('createBook', () => {
    // The DTO must match your Book schema field names exactly
    const createBookDto = {
      bookName: 'Test Book',
      bookCategory: 'Fiction',
      bookPrice: 50,
      bookDescription: 'A great test book',
    };

    it('should create and return a book successfully', async () => {
      // Simulate: no existing book found (so we can proceed with creation)
      findOneMock.mockResolvedValue(null);

      // Simulate: save() returns the newly created book document
      saveMock.mockResolvedValue({
        _id: '69961f858bc13510f164da47',
        ...createBookDto,
        availableQuantity: 1,
      });

      const result = await service.createBook(createBookDto as any);

      // Verify findOne was called with the correct book name to check for duplicates
      expect(findOneMock).toHaveBeenCalledWith({ bookName: createBookDto.bookName });

      // Verify save was called to persist the new book
      expect(saveMock).toHaveBeenCalled();

      // Verify the returned book has the correct fields
      expect(result.bookName).toEqual('Test Book');
      expect(result.bookCategory).toEqual('Fiction');
      expect(result.bookPrice).toEqual(50);
    });

    it('should throw a ConflictException if the book already exists', async () => {
  // Simulate: a book with the same name already exists in the DB
  findOneMock.mockResolvedValue({ bookName: 'Test Book' });

  // Expect the service to throw a ConflictException with the updated message
  await expect(service.createBook(createBookDto as any)).rejects.toThrow(
    new ConflictException(
      `Book with title ${createBookDto.bookName} already exists`,
    ),
  );

  // Verify save was never called since we threw early
  expect(saveMock).not.toHaveBeenCalled();
});
  });

  // -------------------------------------------------------
  // findAllBooks
  // -------------------------------------------------------
  describe('findAllBooks', () => {
    it('should return all books with availableQuantity greater than 0', async () => {
      const mockBooks = [
        { bookName: 'Book One', availableQuantity: 3 },
        { bookName: 'Book Two', availableQuantity: 1 },
      ];

      /**
       * findAllBooks calls: this.booksModel.find(...).exec()
       * So we need find() to return an object with an exec() method
       */
      findMock.mockReturnValue({
        exec: jest.fn().mockResolvedValue(mockBooks),
      });

      const result = await service.findAllBooks();

      // Verify find was called with the correct stock filter
      expect(findMock).toHaveBeenCalledWith({ availableQuantity: { $gt: 0 } });

      // Verify only in-stock books are returned
      expect(result).toHaveLength(2);
      expect(result[0].bookName).toEqual('Book One');
    });
  });

  // -------------------------------------------------------
  // findBook
  // -------------------------------------------------------
  describe('findBookById', () => {
  it('should return a single book by ID', async () => {
    const validId = '69961f858bc13510f164da47'; // valid MongoDB ObjectId format

    const mockBook = {
      _id: validId,
      bookName: 'Found Book',
      bookCategory: 'Drama',
      bookPrice: 30,
      bookDescription: 'A drama book',
    };

    // Chain .exec() since the service calls findById().exec()
    findByIdMock.mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockBook),
    });

    const result = await service.findBookById(validId);

    expect(findByIdMock).toHaveBeenCalledWith(validId);
    expect(result.bookName).toEqual('Found Book');
  });
});

});