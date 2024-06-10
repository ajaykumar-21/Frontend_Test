import "./App.css";
// import Form from "./components/Form/Form";
import Page from "./components/Page/Page";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="wrapper">
      <div className="page-conatiner">
        <Page />
      </div>
      <div className="card-conatiner">
        <Cards />
      </div>
    </div>
  );
}

export default App;
