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
          <Route path='/crud-application-json-server/app' element = {<Link to="/applications"><button className='app'>Visit Application</button></Link>} />
          <Route path='/applications' element={<EmpListing />}></Route>
          <Route path='/applications/employee/create' element={<EmpCreate />}></Route>

          <Route path='/applications/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/applications/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  ); 

}
export default App;