import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';

function App() {
  // when you using first of all installed this command
  // json-server db.json --port 8000

  return (
    <div className="App">
      <h1>CRUD Application developed Using JSON Server</h1>
      <BrowserRouter basename='/crud-application-json-server'>
        <Routes>
          <Route exact path='/crud-application-json-server' element = {<Link to="/applications"><button className='app'>Visit Application</button></Link>} />
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  ); 

}
export default App;