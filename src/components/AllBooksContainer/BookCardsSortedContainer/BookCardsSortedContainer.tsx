import { Book } from "../../../interfaces/Book";
import BookCard from "../BookCard/BookCard";
import classes from "./BookCardsSortedContainer.module.css";

export default function BookCardsSortedContainer(props) {
  return (
    <div className={classes.wrapper}>
      <p className={classes.BookCardsSortedContainerHeader}>
        {props.sortingType.charAt(0).toUpperCase() + props.sortingType.slice(1)}: {props.sortingType === "year" && props.books[0][props.sortingType] === 0 ? `not specified `: props.books[0][props.sortingType]}
      </p>

      <div className={classes.BookCardsSortedContainer}>
        {props.books.map((book: Book) => (
          <BookCard handleCloseModal={props.handleCloseModal} handleOpenModal={props.handleOpenModal} book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}
