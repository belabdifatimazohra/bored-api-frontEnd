import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home'
import Favorite from './components/Favorite'
function App() {
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
