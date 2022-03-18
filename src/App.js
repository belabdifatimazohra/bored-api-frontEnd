import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home'
import Favorite from './components/Favorite'
import {initFavorite} from './redux/actions/boredActions'
import { useDispatch } from "react-redux"; 
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(initFavorite());
  }, [])
  return (
    <div className="App">
            
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
        {/* Favorite page */}
        <Route path="/favorite" element={<Favorite />} />
      </Routes>

    </div>
  );
}

export default App;
