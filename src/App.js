import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import FetchSingleMovie from './components/FetchSingleMovie';
import Error from './components/Error';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>}/> 
        <Route  path='/movie/:id' element={<FetchSingleMovie/>}/> 
        <Route  path='*' element={<Error/>}/> 
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
