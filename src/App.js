import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import MainServices from './components/MainServices';
import './components/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import Verify from './components/Verify';
import ForgotPass from './components/ForgotPass';
import CustomerInfo from './components/CustomerInfo';

function App() {
  return (    
    <div style={{ margin: 0, padding: 0 }} >
      {/* <Main />  */}
      <Router>
          <Switch>
              <Route path="/MainServices">                
                  <MainServices /> 
              </Route>
              <Route path="/" exact> 
                <div style={{ marginTop : 0, paddingTop : 0 }}> 
                  <div className='TextLogo' style={{ marginTop : 0, paddingTop : 0 }}>
                    <p>B O Y Y</p>
                  </div>
                </div>               
                <Login />                                 
              </Route>     
              <Route path="/Verify">    
                <Verify />
              </Route>
              <Route path="/login"> 
                <div style={{ marginTop : 0, paddingTop : 0 }}> 
                  <div className='TextLogo' style={{ marginTop : 0, paddingTop : 0 }}>
                    <p>B O Y Y</p>
                  </div>
                </div>               
                <Login />                                 
              </Route>
              <Route path="/forgot_password"> 
                <ForgotPass /> 
              </Route>             
          </Switch> 
      </Router>
    </div>
  );
}
export default App;