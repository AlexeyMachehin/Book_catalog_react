import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { selectorSortingType } from "../redux/selectors";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { changeSortingType, toggleDirectionSort } from "../redux/booksSlice";

export default function SortingButton() {
  const dispatch = useAppDispatch();
  const sortingType = useAppSelector(selectorSortingType);

  return (
    <Box sx={{ maxWidth: 100, m: 5 }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">Sorting</InputLabel>
        <Select
          labelId="simple-select-label"
          value={sortingType}
          label="Sorting"
          onChange={(e) => {
            dispatch(toggleDirectionSort(e.target.value));
            dispatch(changeSortingType(e.target.value));
          }}
        >
          <MenuItem value="year">Year</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
          <MenuItem value="author">Author</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
