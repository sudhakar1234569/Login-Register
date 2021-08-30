import './App.css';
import Homepage from "./componentes/homepage/homepage"
import Login from "./componentes/login/login"
import Register from "./componentes/register/register"
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { useState } from 'react'

function App() {

  const [user, setLoginUser] = useState()
  return (
    <div className="App">
       <Router>
          <Switch>
             <Route exact path="/">
               {
                 user && user._id  ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={ setLoginUser }/>
               }
               </Route>
             <Route path="/login">
               <Login setLoginUser={setLoginUser}/> 
              </Route>
             <Route path="/register">
               <Register />
              </Route>
          </Switch>
       </Router>
     
    </div>
  )
}

export default App;
