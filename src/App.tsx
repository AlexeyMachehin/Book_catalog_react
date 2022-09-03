import AllBooksContainer from "./components/AllBooksContainer/AllBooksContainer";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Loader from "./components/Loader";
import { useAppSelector } from "./app/hooks";
import { selectorSpinner } from "./redux/selectors";
import SuccessSnackbar from "./components/Alerts/SuccessSnackbar";

function App() {
  const loaderOn = useAppSelector(selectorSpinner);

  return (
    <div className="App">
      <SuccessSnackbar />
      {loaderOn && <Loader />}
      <HeaderContainer />
      <AllBooksContainer />
    </div>
  );
}

export default App;
