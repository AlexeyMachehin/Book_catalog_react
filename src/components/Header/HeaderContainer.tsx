import { useAppSelector } from "../../app/hooks";
import { selectorAllSortedBooks } from "../../redux/selectors";
import AddBookForm from "./AddBookForm/AddBookForm";
import RecommendedBook from "./RecommendedBook/RecommendedBook";
import classes from "./HeaderContainer.module.css";
import { generationRecommendedBook } from "../../utils/generationRecommendedBook";



export default function HeaderContainer() {
  const books = useAppSelector(selectorAllSortedBooks);

  const recommendedBook = generationRecommendedBook(books);

  return (
    <div className={classes.headerContainer}>
      {recommendedBook && <RecommendedBook recommendedBook={recommendedBook} />}
      <AddBookForm />
    </div>
  );
}
