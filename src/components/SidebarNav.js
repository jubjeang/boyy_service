import { Container } from "reactstrap";
import { Col, Row } from "react-bootstrap";
import './SidebarNav.css';
import { Link,useHistory} from 'react-router-dom';

const SidebarNav = ()=>{ 
    let history = useHistory();
    const handleLogout =()=> {
    sessionStorage.removeItem('userID');
    sessionStorage.removeItem('admin');
    sessionStorage.clear();
    history.push("/login");    
    }

    return (
        <>
        <Container fluid >
            <Row style={{textAlign:"right"}}>
                <Col  xs={4} lg={4} xl={4} md={4} sm={4} xxl={4} className="SidebarNav_ColTwiceTitle">
                    <Link className="SidebarNav_twiceTitle SidebarNav_label" to="/MainServices/Register">Create Account</Link>
                </Col>
                <Col xs={3} lg={3} xl={3} md={3} sm={3} xxl={3} className="SidebarNav_ColTwiceTitle">
                    <Link className="SidebarNav_twiceTitle SidebarNav_label" to="#" onClick={handleLogout}>Change Password</Link>                
                </Col>                
                <Col xs={2} lg={2} xl={2} md={2} sm={2} xxl={2} className="SidebarNav_ColTwiceTitle">
                    <Link className="SidebarNav_twiceTitle SidebarNav_label" to="/MainServices/ChangePass">Logout</Link>                
                </Col>
            </Row>
        </Container>
       </>
    )

 }
 export default SidebarNav;