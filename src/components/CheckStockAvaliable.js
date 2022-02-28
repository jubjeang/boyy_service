import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap";
import { Col, Row, Form } from "react-bootstrap";
import './CommonCss.css';
import './CreateStockAvaliable.css';
import Table from 'react-bootstrap/Table'
import ServiceOrder from './ServiceOrder';
import { Switch,Route,Link} from 'react-router-dom';
import CreateServiceOrder from './CreateServiceOrder';
import CheckProduct from './CheckProduct';


const data =[
    {code:"BOYYSRL",name:"BOYYSRL",inventory:0},
    {code:"CK",name:"คลังเช่าพื้นที่เก็บข้างนอก เก็บหนังที่ไม่ใช้แล้ว",inventory:0},
    {code:"DAMAGE",name:"Damage",inventory:0},
    {code:"DEFECTED",name:"Defected",inventory:0},
    {code:"ECOM",name:"ECOM",inventory:0},
    {code:"ECOM-PEN",name:"ECOM Pending",inventory:0},
    {code:"IN-TRANSIT",name:"In-Transit",inventory:0},
    {code:"MATERIAL",name:"Material",inventory:0},
    {code:"MATERIAL-D",name:"MATERIAL-Design",inventory:0}
]
const MainComponent = ()=>{
    return (<div id="CheckStockAvaliable" style={{ margin : 0, padding : 0 }} >
            <Container fluid>                
                <Row style={{display: "flex", alignItems: "center"}}>
                    <Col sm={1} className="ColItem ColItemleft">                                        
                        <label htmlFor="name" className="required">Item No</label>                                            
                    </Col>
                    <Col sm={8} className="ColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="ItemNo" id="ItemNo" className="required" placeholder="Item No"
                                defaultValue="" />
                        </div>
                    </Col>           
                </Row>
                <Row className="rowForm">
                    <Col sm={12} className="ColContent">
                       <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Inventory</th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                  data.map((element)=>{
                                      return(
                                        <tr key="{element.code}">                                
                                            <td>{element.code}</td>
                                            <td>{element.name}</td>
                                            <td style={{textAlign: "right"}}>{element.inventory}</td>
                                        </tr>
                                   ) } )
                              } 
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
    </div>
    );
}
const CheckStockAvaliable = ()=>{
    return (
            <div style={{ margin : 0, padding : 0 }} >
                <Container fluid id="divTitle">
                    <Row>
                        {/* <Col xs={12} lg={12} xl={12} md={12} sm={12} xxl={12} className="gfh-logo">
                            <div className='TextLogo' style={{ marginTop : 0, paddingTop : "5%"}}>

                                <p>
                                    <Link to="/MainServices">B O Y Y</Link>
                                    <p>B O Y Y</p>
                                </p>
                            </div>
                        </Col> */}
                        <Col xs={12} lg={12} xl={12} md={12} sm={12} xxl={12} className="gfh-logo">
                                                {/* <a href="https://boyy.com/">
                                                    <img 
                                                    src="https://boyy-b2b-ss22.herokuapp.com/assets/logo-d96f23139d13c0c38b5b1d7d5f873cca65f5c22b030921fc64b27cdeac09955e.svg" 
                                                    alt="Boyy Logo"  
                                                    />
                                                </a> */}
                                                <div style={{ marginTop : 0, paddingTop : "5%"}}>                                                    
                                                    <Link className="TextLogo" to="/MainServices">B O Y Y</Link>
                                                </div>
                        </Col>
                    </Row>
                    <Row className="RowMenu">
                        <Col sm={2} className="Menu">
                            <ul id="mainlist">
                                {/* <li>                                
                                    <Link to="/MainServices/CheckProduct">Check Product</Link>
                                </li>
                                <li>                                
                                    <Link to="/MainServices/ServiceOrder">Service Order</Link>  
                                </li>
                                <li>
                                    <Link to="/MainServices/CreateServiceOrder">Create Service Order</Link>
                                </li> */}
                                <li>
                                    <Link to="/MainServices/CheckStockAvaliable">Check Stock Avaliable</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={10}>
                            {/* <Router> */}
                                <Switch>
                                    <Route path="/MainServices/CheckStockAvaliable" component={MainComponent}  exact />
                                    <Route path="/MainServices/ServiceOrder" component={ServiceOrder} /> 
                                    <Route path="/MainServices/CheckProduct" component={CheckProduct} /> 
                                    <Route path="/MainServices/CreateServiceOrder" component={CreateServiceOrder} />   
                                    <Route path="/MainServices/CheckStockAvaliable" component={CheckStockAvaliable} />                             
                                    <Route path="/MainServices" component={CheckStockAvaliable} />
                                    {/* <Route exact path="/Main/" /> */}
                                </Switch> 
                            {/* </Router> */}
                        </Col>
                    </Row>
                </Container>
            </div>         
    );
}
export default CheckStockAvaliable;