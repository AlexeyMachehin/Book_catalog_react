import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectorErrorAlert,
  selectorSuccessAlert,
} from "../../redux/selectors";
import { changeErrorAlert, changeSuccessAlert } from "../../redux/booksSlice";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SuccessSnackbar() {
  const isErrorAlert = useAppSelector(selectorErrorAlert);
  const isSuccessAlert = useAppSelector(selectorSuccessAlert);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isErrorAlert}
        autoHideDuration={3000}
        onClose={() => dispatch(changeErrorAlert())}
      >
        <Alert severity="error">There are no such books with this title</Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isSuccessAlert}
        autoHideDuration={3000}
        onClose={() => dispatch(changeSuccessAlert())}
      >
        <Alert severity="success">Success!</Alert>
      </Snackbar>
    </div>
  );
}
