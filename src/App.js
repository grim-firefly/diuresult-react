import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Index';
import { Route, Routes } from 'react-router-dom';
import Range from './Pages/Range/Index';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/range' element={<Range />} />
      </Routes>
    </>
  );
}

export default App;
