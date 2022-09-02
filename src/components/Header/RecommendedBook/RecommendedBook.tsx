import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import classes from "./RecommendedBook.module.css";

export default function RecommendedBook(props) {
  return (
    <Card sx={{ p: 2, width: 300, minHeight: 400  }}>
      <div className={classes.cardMediaContainer}>
        <CardMedia
          component="img"
          image={props.recommendedBook.imageLink}
          alt="book image"
          sx={{ height: 190, width: 128 }}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Recommended Book:
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Title: {props.recommendedBook.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Author: {props.recommendedBook.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Publication year: {props.recommendedBook.year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {props.recommendedBook.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ISBN: {props.recommendedBook.isbn}
        </Typography>
      </CardContent>
    </Card>
  );
}
