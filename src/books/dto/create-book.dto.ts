import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty()
    @IsString()
    bookName: string;

    @IsNotEmpty()
    @IsString()
    bookCategory: string;

    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces: 2})
    @IsPositive()
    bookPrice: number;

    @IsNotEmpty()
    @IsString()
    bookDescription: string;

    @IsInt()
    @IsPositive()
    availableQuantity: number;
}