import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../app/hooks";
import { setNewBook } from "../../../redux/thunk";
import { checkIsbn } from "../../../utils/checkIsbn";
import { getThumbnailLink } from "../../../utils/getThumbnailLink";
import classes from "./AddBookForm.module.css";
import TextField from "@mui/material/TextField";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function AddBookForm() {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      year: "",
      rating: "",
      isbn: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(100, "Must be 100 characters or less")

        .required("Required"),

      author: Yup.string().required("Required"),

      year: Yup.number(),

      rating: Yup.number(),

      isbn: Yup.string()
        .min(13, "must be at least 13 characters long")
        .max(17, "must be max 17 characters long")
        .matches(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/, "error "),
    }),
    onSubmit: async (values) => {
      
      dispatch(
        setNewBook({
          name: (values.title as any).trim(),
          author: values.author.trim(),
          year: Number(values.year),
          rating: Number(values.rating),
          isbn: await checkIsbn(values.isbn).then((result) => result),
          imageLink: await getThumbnailLink(values.title as any).then(
            (result) => result
          ),
        })
      );
      formik.resetForm();
    },
  });
  return (
    <Card sx={{ p: 2, width: 300, minHeight: 400 }}>
      <form className={classes.addBookForm} onSubmit={formik.handleSubmit}>
        <Typography variant="h5">Add new book</Typography>

        <TextField
          id="title"
          label="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          required
        />

        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}

        <TextField
          id="author"
          label="author"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author}
        />
        {formik.touched.author && formik.errors.author ? (
          <div>{formik.errors.author}</div>
        ) : null}

        <TextField
          id="year"
          label="year"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.year}
        />
        {formik.touched.year && formik.errors.year ? (
          <div>{formik.errors.year}</div>
        ) : null}

        <TextField
          id="rating"
          label="rating"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rating}
        />
        {formik.touched.rating && formik.errors.rating ? (
          <div>{formik.errors.rating}</div>
        ) : null}

        <TextField
          id="isbn"
          label="isbn"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.isbn}
        />
        {formik.touched.isbn && formik.errors.isbn ? (
          <div>{formik.errors.isbn}</div>
        ) : null}

        <Button type="submit" variant="outlined">Submit </Button>
      </form>
    </Card>
  );
}
