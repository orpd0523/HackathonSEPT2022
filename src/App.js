import { BrowserRouter, Route, Routes } from "react-router-dom";
import PathPage from "./Pages/PathPage";
import TakeMeHomePage from "./Pages/TakeMeHomePage";
import image1 from "./assests/Screen Shot 2022-12-01 at 8.34.png";
import image2 from "./assests/Screen Shot 2022-12-01 at 8.34.png";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { RiArrowGoForwardFill } from "react-icons/ri";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useEffect, useRef } from "react";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TakeMeHomePage />} />
        </Routes>
        <Routes>
          <Route
            path="/path/1"
            element={
              <PathPage
                img={image1}
                directions={"Walk straight ahead"}
                arrow={FaArrowUp}
              />
            }
          />
          <Route
            path="/path/2"
            element={
              <PathPage
                img={image2}
                directions={"Turn right"}
                arrow={FaArrowRight}
              />
            }
          />
          <Route
            path="/path/3"
            element={
              <PathPage
                img={image2}
                directions={"Turn Back"}
                arrow={RiArrowGoBackFill}
              />
            }
          />
          <Route
            path="/path/4"
            element={
              <PathPage
                img={image2}
                directions={"Turn right"}
                arrow={RiArrowGoForwardFill}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
