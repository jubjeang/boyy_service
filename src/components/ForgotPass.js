import React, { useRef, useState } from 'react'
// import './ForgotPass.css';
import MuiAlert from '@mui/material/Alert';
import { Backdrop, Box, CircularProgress, Grid, Snackbar } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import { Config } from './Config'
import { useHistory } from "react-router-dom";
// import { navigate } from 'hookrouter';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ForgotPass =()=> { 
    let history = useHistory();
    const axios = require('axios');
    const userBasicAuth = Config.UserBasicAuth;
    const passBasicAuth = Config.PassBasicAuth;
    let baseJsonUser = Config.BaseJsonUser;
    const baseUserAPI = Config.BaseUserAPI;
    const emailForgot = useRef();
    const [errorMessage, setErrorMessage] = useState(true);
    const [dataLoadedStatus, setDataLoadedStatus] = useState(true);
    const [error, setError] = useState(0);
    const [errStatus,setErrStatus] = useState({
        show: false,
        type: "", //error, warning, info, success
        message: ""
    })
    const handleErrStatusClose = () => {
       setErrStatus ({show: false, type: "", message: ""});
    }

    const handleSubmit = () => {
        let email = emailForgot.current.value;
        setError(0);
        setErrorMessage(true);
        if(email.length === 0) { return setError(1);}
        baseJsonUser = {
            ...baseJsonUser,
            isfunction: "FORGET",
            // email:"Thanaphon.w@triplep.co.th",
            email: email,
        }
        console.log( baseJsonUser )
        axios({
            header: {
                "Content-Type": "application/json",
                "If-Match": "*"
            },
            method: 'post',
            url: baseUserAPI,
            auth: {
                username: userBasicAuth,
                password: passBasicAuth
            },
            data: baseJsonUser
          })
        .then(res => {
            if(res.status === 200){
                const JsonToObj = JSON.parse(res.data.value);
                const firstname = JsonToObj.value[0].status.split(" ");
                console.log( JsonToObj )
                if(firstname[0] === 'อีเมล์'){
                    console.log(JsonToObj.value,'A');
                    setErrStatus({show: true, type: "success", message: JsonToObj.value[0].status});
                    setTimeout(() => {  history.push("/login"); }, 3000);
                } else {setErrorMessage(false); setError(1);}
            }
        }).catch(err =>{
            console.log(err,'err');
            return setError(1);
            // setErrStatus({show: true, type: 'warning' , message: err})
        });
    }
    
    return (
    <Box sx={{height: {xs:'100%',sm:'60vh'}, alignContent: 'center'}}>
        <Snackbar
        open={errStatus.show}
        autoHideDuration={3000}
        onClose={handleErrStatusClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert severity={errStatus.type}>
                {errStatus.message}
            </Alert>
        </Snackbar>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={!dataLoadedStatus}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
        <Container fluid id="divFormLogin" style={{height: '100%'}}>
            <Col xs={12} sm={6} md={5} xl={4} style={{maxWidth: '29rem'}}>
                <Row>
                    <Col sm={12} className="text-center">
                        <label className="uppercase bold" style={{fontSize: 'larger',margin: '20px auto'}}>FORGOT PASSWORD</label>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div className="form-group" style={{margin: 0}}>
                            <label htmlFor="CustomerEmail" className="uppercase bold" style={{fontSize: 'small'}}>
                                Email
                            </label>
                            <input
                                type="email"
                                className="textbox_login"
                                name="customer[email]"
                                id="ForgotEmail" 
                                spellCheck="false"
                                autoComplete="off"
                                autoCapitalize="off"
                                placeholder="careers@geeksforgeeks.org" 
                                autoFocus=""
                                ref={emailForgot} style={{textTransform: "none"}}/>
                            <div style={{color: 'red', fontSize: '0.65rem',textAlign: 'right', opacity: error, transition: 'opacity 0.4s'}}>
                                {errorMessage ? 'PLEASE ENTER THE Email'.toUpperCase() : 'Email not found in the system'.toUpperCase()}
                            </div>
                        </div>	
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <button
                            type='submit'
                            className='button-submit'
                            style={{padding: 0, marginBottom: 0}}
                            onClick={handleSubmit}
                        >
                            <div>
                                SUBMIT
                            </div>
                        </button>
                    </Col>
                </Row>
            </Col>
        </Container>
    </Box>
    )
  }
  
  export default ForgotPass;
