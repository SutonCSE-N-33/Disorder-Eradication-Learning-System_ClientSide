import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {createContext,useState} from 'react';
import Home from './Components/Home/Home';
import DifferentItem from './Components/DifferentItem/DifferentItem';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Test from './Components/Test/Test';


export const foodContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <foodContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Navigate to="/home"></Navigate>} />
                  <Route path="/home" element={<Home></Home>}/>
                  <Route path="/basicKnowledge/:item" element={<DifferentItem></DifferentItem>} />
                  <Route path="/dashboard" element={<Dashboard></Dashboard>} />
                  <Route path="/login" element={<Login></Login>} />
                  <Route path='/test' element={<Test></Test>} />
              </Routes>
      </BrowserRouter>
    </foodContext.Provider>
  );
}

export default App;
