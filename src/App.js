import "./styles.css";
import searchBarDatas from "./Data.json";
import Searchbar from "./Searchbar/Searchbar";

export default function App() {
  return (
    <div className="App">
      <Searchbar data={searchBarDatas} />
    </div>
  );
}
