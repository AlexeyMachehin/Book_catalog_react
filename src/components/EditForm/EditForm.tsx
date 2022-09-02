import { Button, Card, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../app/hooks";
import { updateBook } from "../../redux/thunk";
import { checkIsbn } from "../../utils/checkIsbn";
import { getThumbnailLink } from "../../utils/getThumbnailLink";
import classes from "./Edit.Form.module.css";

export default function EditForm(props) {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: props.book.name,
      author: props.book.author,
      year: props.book.year,
      rating: props.book.rating,
      isbn: props.book.isbn.replace(/✔️|❌/g, ""),
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
      props.handleCloseModal();
      dispatch(
        updateBook({
          book: {
            name: (values.title as any).trim(),
            author: values.author.trim(),
            year: Number(values.year),
            rating: Number(values.rating),
            isbn: await checkIsbn(values.isbn).then((result) => result),
            imageLink: await getThumbnailLink(values.title as any).then(
              (result) => result
            ),
          },
          id: props.book.id,
        })
      );
    },
  });
  // return (
  //   <form className={classes.editForm} onSubmit={formik.handleSubmit}>
  //     <p>Edit book</p>
  //     <label htmlFor="title">title</label>
  //     <input
  //       id="title"
  //       name="title"
  //       type="text"
  //       onChange={formik.handleChange}
  //       onBlur={formik.handleBlur}
  //       value={formik.values.title}
  //     />
  //     {formik.touched.title && formik.errors.title ? (
  //       <div>{formik.errors.title as string}</div>
  //     ) : null}

  //     <label htmlFor="author">author</label>
  //     <input
  //       id="author"
  //       name="author"
  //       type="text"
  //       onChange={formik.handleChange}
  //       onBlur={formik.handleBlur}
  //       value={formik.values.author}
  //     />
  //     {formik.touched.author && formik.errors.author ? (
  //       <div>{formik.errors.author as string}</div>
  //     ) : null}

  //     <label htmlFor="year">year</label>
  //     <input
  //       id="year"
  //       name="year"
  //       type="text"
  //       onChange={formik.handleChange}
  //       onBlur={formik.handleBlur}
  //       value={formik.values.year}
  //     />
  //     {formik.touched.year && formik.errors.year ? (
  //       <div>{formik.errors.year as string}</div>
  //     ) : null}

  //     <label htmlFor="rating">rating</label>
  //     <input
  //       id="rating"
  //       name="rating"
  //       type="text"
  //       onChange={formik.handleChange}
  //       onBlur={formik.handleBlur}
  //       value={formik.values.rating}
  //     />
  //     {formik.touched.rating && formik.errors.rating ? (
  //       <div>{formik.errors.rating as string}</div>
  //     ) : null}

  //     <label htmlFor="isbn">isbn</label>
  //     <input
  //       id="isbn"
  //       name="isbn"
  //       type="text"
  //       onChange={formik.handleChange}
  //       onBlur={formik.handleBlur}
  //       value={formik.values.isbn}
  //     />
  //     {formik.touched.isbn && formik.errors.isbn ? (
  //       <div>{formik.errors.isbn as string}</div>
  //     ) : null}

  //     <button type="submit">Submit</button>
  //   </form>
  // );

  return (
    <form className={classes.editForm} onSubmit={formik.handleSubmit}>
      <Typography variant="h5">Edit book</Typography>

      <TextField
        id="title"
        label="title"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        required
      />

      {formik.touched.title && formik.errors.title ? (
        <div>{formik.errors.title as string}</div>
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
        <div>{formik.errors.author as string}</div>
      ) : null}

      <TextField
        id="year"
        label="year"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.year}
      />
      {formik.touched.year && formik.errors.year ? (
        <div>{formik.errors.year as string}</div>
      ) : null}

      <TextField
        id="rating"
        label="rating"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.rating}
      />
      {formik.touched.rating && formik.errors.rating ? (
        <div>{formik.errors.rating as string}</div>
      ) : null}

      <TextField
        id="isbn"
        label="isbn"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.isbn}
      />
      {formik.touched.isbn && formik.errors.isbn ? (
        <div>{formik.errors.isbn as string}</div>
      ) : null}

      <Button type="submit" variant="outlined">
        Submit{" "}
      </Button>
    </form>
  );
}
