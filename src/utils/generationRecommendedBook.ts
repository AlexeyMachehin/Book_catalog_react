import { Book } from "./../interfaces/Book";

export function generationRecommendedBook(allBooks: Book[]): Book {
  let currentDate = new Date();

  let currentYear = currentDate.getUTCFullYear();

  let index = 0;

  let sortedByYear: Book[] = [];

  allBooks.forEach((book) => {
    if (book.year <= currentYear - 2) {
      sortedByYear.push(book);
    }
  });

  let maxRating = 0;

  sortedByYear.forEach((book) => {
    if (book.rating > maxRating) {
      maxRating = book.rating;
    }
  });

  let sortedByRating: Book[] = [];

  sortedByYear.filter((book) => {
    if (book.rating === maxRating) {
      sortedByRating.push(book);
    }
  });

  if (sortedByRating.length > 1) {
    index = Math.floor(Math.random() * sortedByRating.length);

    return sortedByRating[index];
  } else {
    return sortedByRating[index];
  }
}
