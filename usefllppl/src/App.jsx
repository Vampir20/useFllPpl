import "./App.css";
import Navbar from "./mainpage/nav-bar/Navbar";
import Search from "./mainpage/search/Search";
import Cards from "./mainpage/cards/Cards";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Support from "./support/Support";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <Search/>
        <Cards/>
        <div className="content-app-wrapper">
          <Routes>
            <Route path='support' component={<Support/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
  );
};

export default App;
