import AllBooksContainer from "./components/AllBooksContainer/AllBooksContainer";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Loader from "./components/Spinner";
import { useAppSelector } from "./app/hooks";
import { selectorSpinner } from "./redux/selectors";

function App() {
  const loaderOn = useAppSelector(selectorSpinner);

  return (
    <div className="App">
      {loaderOn && <Loader />}
      <HeaderContainer />
      <AllBooksContainer />
    </div>
  );
}

export default App;
