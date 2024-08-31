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
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Link to="/crud-application_json-server"><button className='app'>Visit Application</button></Link>} />
          <Route path='/crud-application_json-server' element={<EmpListing />}></Route>
          <Route path='/crud-application_json-server/employee/create' element={<EmpCreate />}></Route>

          <Route path='/crud-application_json-server/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/crud-application_json-server/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  ); 

}
export default App;