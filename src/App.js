import Screen from './components/Screen';
import PathPage from './Pages/PathPage';
import TakeMeHomePage from './Pages/TakeMeHomePage';
import HomePage from './Pages/HomePage';
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";


function App() {
  return (
    <div className="container">
   {/* I will need to add a router here.. */}
  <Screen>
    {/* <HomePage/> */}
    <TakeMeHomePage/>
    {/* <PathPage/>
    <PathPage/> */}
  </Screen>
    </div>
  );
}

export default App;
