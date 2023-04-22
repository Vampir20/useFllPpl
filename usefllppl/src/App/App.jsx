import "./App.scss";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Loyaut from "../pages/loyaut/Loyaut";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import ErrorPage from "../pages/error-page/ErrorPage";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Loyaut />}>
    <Route index element={<Home />}/>
    <Route path="about" element={<About />}/>
    <Route path="*" element={<ErrorPage />}/>
  </Route>
))

const App = () => {
  return (
      <RouterProvider router={router}/>
  );
};

export default App;
