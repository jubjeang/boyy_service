import React from 'react'
import './Login.css';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import MainSevices from './MainSevices';
class Login extends React.Component {
    render() {
      return (
        <div id="divFormLogin">
            <div className="form-group SignIn">
                <label className="uppercase">Sign In</label>
            </div>
            <form method="post" action="/account/login" id="customer_login" acceptCharset="UTF-8">
                <input type="hidden" name="form_type" defaultValue="customer_login" />
                <input type="hidden" name="utf8" defaultValue="✓" />
                    <div className="form-group">
                        <label htmlFor="CustomerEmail" className="uppercase bold">
                            Email
                        </label>
                        <br />
                        <input type="email" className="textbox_login" name="customer[email]" id="CustomerEmail" 
                        spellCheck="false" autoComplete="off" autoCapitalize="off" placeholde="careers@geeksforgeeks.org" 
                        autoFocus="" />
                    </div>			
                <div className="form-group">
                    <label htmlFor="CustomerPassword" className="uppercase bold">
                        Password
                    </label>
                    <br />
                    <input type="password" className="textbox_login" 
                    name="customer[password]" 
                    id="CustomerPassword" 
                    placeholder="Password"  />
                </div>
                <div className="row align-items-center">				
                    <div className="col-12 text-center">
                        <Router>
                            <ul className="horizontal-menu-login">
                                <li>
                                    <Link to="/MainSevices">Sign In</Link>                                    
                                </li>
                            </ul>
                            <Switch>
                                <Route path="/MainSevices" exact>
                                    <MainSevices /> 
                                </Route>
                            </Switch>
                        </Router>
                    </div>                
                    <div className="col-12 text-center">
                        <a href="#recover" id="RecoverPassword">Forgot your password?</a>
                    </div>
                </div>
            </form>
        </div>
        )
    }
  }
  
  export default Login
