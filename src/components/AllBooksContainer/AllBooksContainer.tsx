import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Book } from "../../interfaces/Book";
import {
  selectorAllSortedBooks,
  selectorDirectionSort,
  selectorSortingType,
} from "../../redux/selectors";
import { fetchSortedBooks } from "../../redux/thunk";
import { sort } from "../../utils/sorting";
import BookCardsSortedContainer from "./BookCardsSortedContainer/BookCardsSortedContainer";
import SortingButton from "../SortingButton";
import classes from "./AllBooksContainer.module.css";
import EditBookModal from "../EditBookModal";

function AllBooksContainer() {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectorAllSortedBooks);
  const sortingType = useAppSelector(selectorSortingType);
  const directionSort = useAppSelector(selectorDirectionSort);

  useEffect(() => {
    dispatch(fetchSortedBooks({ sortingType, directionSort }));
    // dispatch(setRecommendedBook(generationRecommendedBook(books)));
  }, [sortingType]);

  const [open, setOpen] = useState(false);
  const [book, setBook] = useState(null);
  const handleOpen = (book) => {
    setBook(book);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.booksListContainer}>
      <EditBookModal book={book} open={open} handleCloseModal={handleClose} />

      <div className={classes.SortingButtonContainer}>
        <SortingButton />
      </div>

      {sort(books, sortingType).map((books: Book[], index) => (
        <BookCardsSortedContainer
          handleOpenModal={handleOpen}
          handleCloseModal={handleClose}
          key={index}
          books={books}
          sortingType={sortingType}
        />
      ))}
    </div>
  );
}

export default AllBooksContainer;
