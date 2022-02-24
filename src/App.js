import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Main from './components/Main';
import './components/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap";
import { Col, Row, Form } from "react-bootstrap";

function App() {
  return (    
    <div style={{ margin: 0, padding: 0 }} >
      {/* <Main />  */}
      <Router>
          <Switch>
              <Route path="/Main">                
                  <Main /> 
              </Route>
              <Route path="/" exact>                
                <Menu />
                 <Container fluid id="divFormLogin">
                    <Row   style={{width:"200px", textAlign:"center"}} >
                        <Col sm={12}>
                            <label className="uppercase">Sign In</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div className="form-group">
                                <label htmlFor="CustomerEmail" className="uppercase bold">
                                    Email
                                </label>
                                <br />
                                <input type="email" className="textbox_login" name="customer[email]" id="CustomerEmail" 
                                spellCheck="false" autoComplete="off" autoCapitalize="off" placeholde="careers@geeksforgeeks.org" 
                                autoFocus="" />
                            </div>		
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div className='form-group'>
                                <div className='horizontal-menu-login'>
                                    <ul className='horizontal-menu-login'>
                                        <li>
                                            <Link to="/Main">Sign In</Link>                                    
                                        </li>
                                    </ul>   
                                </div>
                                
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>                            
                            <a href="#recover" id="RecoverPassword">Forgot your password?</a>
                        </Col>
                    </Row>
                </Container>
                <Footer />
              </Route>              
          </Switch> 
      </Router>
    </div>
  );
}
export default App;