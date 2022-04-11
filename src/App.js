import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
              <Route index element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>

              <Route path='/users'>
                <Route index element={<List/>}/>
                <Route path='new' element={<New/>}/>
              </Route>
              
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
