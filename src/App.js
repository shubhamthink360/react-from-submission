import './App.css';
import Navbar from './components/Navbar/Navbar';
import IndexTable   from './components/Form/IndexTable';
import Create from './components/Form/Create';
import Edit from './components/Form/Edit';
import { Route, Routes } from 'react-router-dom';

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
            </Routes>
          </div>
      </div>
      
    </>
  );
}

export default App;
