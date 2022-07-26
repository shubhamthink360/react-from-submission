import './App.css';
import Navbar from './components/Navbar/Navbar';
import IndexTable   from './components/Form/IndexTable';
import Create from './components/Form/Create';
import Edit from './components/Form/Edit';
import Login from './components/Login/Login';
import Registration from './components/Register/Registration';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'



axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
const axiosCredentials = true;
axios.defaults.withCredentials = axiosCredentials;
axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-CSRF-TOKEN'] = true;



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
          <div className="row">
            <Routes>
              <Route path='/' element={<IndexTable />}></Route>
              <Route path='/create' element={<Create />}></Route>
              <Route path='/edit/:id' element={<Edit />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Registration />}></Route>
            </Routes>
          </div>
      </div>
      
    </>
  );
}

export default App;
