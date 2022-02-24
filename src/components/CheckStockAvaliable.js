import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap";
import { Col, Row, Form } from "react-bootstrap";
import './CreateStockAvaliable.css';
import Table from 'react-bootstrap/Table'

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
const CheckStockAvaliable = ()=>{
    return (<div id="CheckStockAvaliable" style={{ margin : 0, padding : 0 }} >
            <Container fluid>                
                <Row className="rowForm">
                        <Col sm={12}>
                            <div className="MenuTitle" style={{width: "170px"}}>CHECK STOCK AVALIABLE</div>
                        </Col>
                </Row>
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
            <div class="navbar navbar-inverse navbar-fixed-bottom">
              <div class="container">
                <p class="navbar-text">© Random</p>
              </div>
            </div>
    </div>
    );
}
export default CheckStockAvaliable;