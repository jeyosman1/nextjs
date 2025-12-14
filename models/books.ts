import  mongoose, { Schema, model, models} from "mongoose";

export interface Book {
  title: string;
  author: string;
  price: number;
  coverImage: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const BookSchema = new Schema<Book>({
    title: String,
    author: String,
    price: Number,
    coverImage: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Book = model<Book>("Book", BookSchema);
export default Book;
