import { Route, Routes } from "react-router-dom";
import PathPage from "./Pages/PathPage";
import TakeMeHomePage from "./Pages/TakeMeHomePage";

function App() {
  // let i = useRef(1);
  // let id = null;
  // const startRoute = () => {
  //   id = setInterval(() => {
  //     window.location = `/path/${i.current}`;
  //     i.current++;
  //     if (i.current > 4) {
  //       clearInterval(id);
  //     }
  //   }, 3000);
  // };

  // useEffect(() => {
  //   startRoute();
  // }, []);
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<TakeMeHomePage />} />
        <Route path="/path" element={<PathPage />} />
        <Route path="*" element={<TakeMeHomePage />} />
      </Routes>
    </div>
  );
}

export default App;
