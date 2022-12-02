import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="container">
      <div>
        <Card src="https://www.realestate.com.au/blog/images/800x450-fit,progressive,format=webp/2017/06/12121155/capi_5598f67b37628b0e689d4b88ded2e15f_de2ee4cbfc7de746762b45dd42c90879.jpeg" alt="home">
          <Button>Take me home</Button>
        </Card>
      </div>
      <div>
        <a href="tel:1-800-903-5159">Contact Emergency </a>
      </div>
    </div>
  );
}

export default App;
