import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap";
import { Col, Row, Form } from "react-bootstrap";
import './CreateServiceOrder.css';
const CreateServiceOrder = ()=>{
    return (
        <div id="CreateServiceOrder" style={{ margin : 0, padding : 0 }} >
            <Container fluid>
                <Row className="rowForm">
                        <Col sm={12}>
                            <div className="MenuTitle">Create Service Order</div>
                        </Col>
                </Row>
                <Row className="rowForm">
                    <Col sm={4} className="ColItem ColItemleft">                                        
                        <label htmlFor="name" className="required">Full name</label>                                            
                    </Col>
                    <Col sm={4} className="ColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="name" id="name" className="required" placeholder="Full name"
                                defaultValue="" />
                        </div>
                    </Col>                                    
                </Row>
                <Row  className="rowForm" style={{height:'110px'}}>
                    <Col sm={4} className="ColItem ColItemleft">
                        <label htmlFor="Address" className="required">Address</label>
                    </Col>
                    <Col sm={4} className="ColItem ColItemright ">
                            <div className="form-group">                                            
                                <textarea rows="3" name="Address" id="Address" className="required" placeholder="Address">						
                                </textarea>
                            </div>
                    </Col>
                </Row>
                <Row className="rowForm">
                    <Col sm={4} className="ColItem ColItemleft">
                        <label htmlFor="Phone" className="required">Phone</label>
                    </Col>
                    <Col sm={4} className="ColItem ColItemright">
                            <div className="form-group">
                                <input type="text" name="Phone" id="Phone" className="required" placeholder="Phone"
                                defaultValue=""
                                />
                            </div>
                    </Col>
                </Row>
                <Row className="rowForm">
                    <Col sm={4} className="ColItem ColItemleft">
                        <label htmlFor="DateOfRepair" className="required">Date Of Repair</label>
                    </Col>
                    <Col sm={4} className="ColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="Phone" id="Phone" className="required" placeholder="Date Of Repair"
                                defaultValue=""
                                />
                        </div>
                    </Col>
                </Row>
                <Row  className="rowForm">
                    <Col sm={4} className="ColItem ColItemleft">
                        <label htmlFor="Styles" className="required">Styles</label>
                    </Col>
                    <Col sm={4} className="ColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="Styles" id="Styles" className="required" placeholder="Styles"
                                defaultValue="" />
                        </div>
                    </Col>
                </Row>
                <Row className="rowForm">
                    <Col sm={4} className="ColItem ColItemleft">
                        <label htmlFor="Colors" className="required">Color(<span className="text-lowercase">s</span>)</label>
                    </Col>
                    <Col sm={4} className="ColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="Colors" id="Colors" className="required" placeholder="Colors"
                                defaultValue=""
                                />
                        </div>
                    </Col>
                </Row> 
                <Row className="rowForm">
                    <Col sm={4} className="ColItem ColItemleft">
                        <label htmlFor="Season" className="required">Season</label>
                    </Col>
                    <Col sm={4} className="ColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="Season" id="Season" className="required" placeholder="Season"
                                defaultValue=""
                                />
                        </div>
                    </Col>
                </Row>                                
                <Row className="rowForm">
                    <Col sm={4} className="ColItem ColItemleft">
                    <label htmlFor="Quantity" className="required">Quantity</label>
                    </Col>
                    <Col sm={4} className="ColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="Quantity" id="Quantity" className="required" placeholder="Quantity"
                                defaultValue=""
                                />
                        </div>
                    </Col>
                </Row>
                <Row className="rowForm">
                    <Col sm={4} className="ColItem ColItemleft">
                    <label htmlFor="RepairCharges" className="required">Repair Charges</label>
                    </Col>
                    <Col sm={4} className="ColItem ColItemright">
                        <div className="form-group">                                            
                        <input type="text" name="RepairCharges" id="RepairCharges" className="required" placeholder="Repair Charges"
                                defaultValue=""
                                />
                        </div>
                    </Col>
                </Row>
                <Row className="rowForm" style={{height:'90px'}}>
                    <Col sm={4} className="ColItem ColItemleft">
                    <label htmlFor="" className="required">Accessories Included with handbages/SLG</label>
                    </Col>
                    <Col sm={7} className="ColItem ColItemright" style={{paddingLeft:'15px'}}>
                        <div className="form-check">                                             
                                <input type="checkbox" id="Card" className="form-check-input" />
                                <label className="form-check-label" htmlFor="Card">&nbsp;Card</label>
                                <input type="checkbox" id="DustBag" className="form-check-input" />
                                <label className="form-check-label" htmlFor="DustBag">&nbsp;Dust Bag</label>                                                
                                <input type="checkbox" id="Strap" className="form-check-input" />
                                <label className="form-check-label" htmlFor="Strap">&nbsp;Strap</label> 
                                <input type="checkbox" id="Other" className="form-check-input" />
                                <label className="form-check-label" htmlFor="Other">&nbsp;Other&nbsp;
                                    <input type="text" 
                                    id="tbOther" 
                                    className="textboxother" 
                                    style={{width:'30%'}}
                                    />
                                </label>                                                                       
                        </div>
                    </Col>
                </Row>                                
                <Row className="rowForm" style={{height:'110px'}}>
                    <Col sm={4} className="ColItem ColItemleft">
                        <label htmlFor="Description" className="required">Description</label>
                    </Col>
                    <Col sm={4} className="ColItem ColItemright">
                        <div className="form-group">                                            
                            <textarea rows="3" name="Description" id="Description" className="required" placeholder="Description">						
                            </textarea>
                        </div>
                    </Col>
                </Row>
                <Row className="rowForm">
                    <Col sm={2} className="ColItem ColItemleft">
                        
                    </Col>
                    <Col sm={8} className="ColItem ColItemright">
                        <div className="col-12 text-center horizontal-menu-serviceorder">                                            
                            <ul>
                                <li>                                                    
                                    <a href="#">Submit</a>                                   
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>       
    );
}
export default CreateServiceOrder;