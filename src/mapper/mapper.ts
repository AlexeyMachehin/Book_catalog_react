import { DocumentData } from "firebase/firestore";
import { Book } from "../interfaces/Book";
export function fromDto(value: DocumentData, id: string): Book {
  return {
    name: value.name,
    year: value.year,
    author: value.author,
    rating: value.rating,
    imageLink: value.imageLink,
    isbn: value.isbn,
    id: id,
  };
}

export function toDto(value: Book): DocumentData {
  return {
    name: value.name,
    year: value.year,
    author: value.author,
    rating: value.rating,
    imageLink: value.imageLink,
    isbn: value.isbn,
  };
}
