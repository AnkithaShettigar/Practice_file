import './App.css';
import Error from './component/Error';
import Home from './component/Home';
import  Login  from './component/Login';
import Register from './component/Register';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter >
    </div>
  );
}

export default App;
