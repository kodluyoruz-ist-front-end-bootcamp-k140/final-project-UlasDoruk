import { Route, Routes } from 'react-router-dom';
import './App.css';
import Data from "./components/Data/Data"
import Navbar from './components/Navbar/Navbar'
import Popular from './components/Routes/Popular';
import Favorite from "./components/Routes/Favorite"
import Data_2 from './components/Data/Data_2';
import Data_3 from "./components/Data/Data_3";
import Data_4 from "./components/Data/Data_4";
import Data_5 from "./components/Data/Data_5";
import Movie from "./components/Routes/Movie";
import Error from "./components/Routes/NotFound"
import { Theme } from './components/Theme/Theme';
import { AddFavorite } from './Context/AddFavorite';

 
function App() {

  return (
    <div>
      <AddFavorite>
        <Navbar />
        <Theme>
          <Routes>
            <Route path="/" element={<Data />}></Route>
            <Route path="/Popular" element={<Popular />}></Route>
            <Route path="/Favorite" element={<Favorite />}></Route>
            <Route path="/page_2" element={<Data_2 />}></Route>
            <Route path="/page_3" element={<Data_3 />}></Route>
            <Route path="/page_4" element={<Data_4 />}></Route>
            <Route path="/page_5" element={<Data_5 />}></Route>
            <Route path={"/movie"} element={<Movie/>}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Theme>
      </AddFavorite>
    </div>
  );
}

export default App;
