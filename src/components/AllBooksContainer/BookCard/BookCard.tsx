import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./BookCard.module.css";
import { useAppDispatch } from "../../../app/hooks";
import { removeBook } from "../../../redux/thunk";

export default function BookCard(props) {
  const dispatch = useAppDispatch();
  return (
    <Card sx={{ p: 2, width: 300, minHeight: 400 }}>
      <div className={classes.cardMediaContainer}>
        <CardMedia
          component="img"
          image={props.book.imageLink}
          alt="book image"
          sx={{ height: 190, width: 128 }}
        />
      </div>

      <CardContent>
        <Typography
          className={classes.bookCardTypography}
          gutterBottom
          variant="h5"
          component="div"
        >
          Title: {props.book.name}
        </Typography>
        <Typography
          className={classes.bookCardTypography}
          variant="body2"
          color="text.secondary"
        >
          Author: {props.book.author}
        </Typography>
        <Typography
          className={classes.bookCardTypography}
          variant="body2"
          color="text.secondary"
        >
          Publication year: {props.book.year === 0 ? "" : props.book.year}
        </Typography>
        <Typography
          className={classes.bookCardTypography}
          variant="body2"
          color="text.secondary"
        >
          Rating: {props.book.rating}
        </Typography>
        <Typography
          className={classes.bookCardTypography}
          variant="body2"
          color="text.secondary"
        >
          ISBN: {props.book.isbn}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => props.handleOpenModal(props.book)} size="large">
          Edit
        </Button>

        <Button
          onClick={() => {
            dispatch(removeBook(props.book.id));
          }}
          size="large"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
