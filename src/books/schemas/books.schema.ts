import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
    @Prop({required: true, unique: true})
    bookName: string;

    @Prop({required: true})
    bookCategory: string;

    @Prop({required: true})
    bookPrice: number;

    @Prop({required: true})
    bookDescription: string;

    @Prop({default: 1})
    availableQuantity: number;
}

export const BookSchema = SchemaFactory.createForClass(Book)