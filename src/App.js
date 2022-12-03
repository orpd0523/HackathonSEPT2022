import { Route, Routes } from "react-router-dom";
import PathPage from "./Pages/PathPage";
import TakeMeHomePage from "./Pages/TakeMeHomePage";

function App() {
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
