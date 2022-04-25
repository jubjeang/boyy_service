import React , { useState, useRef, useEffect } from 'react'
import './Login.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import { Backdrop, Box, CircularProgress, Grid, Snackbar } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import MuiAlert from '@mui/material/Alert';
import { Config } from './Config';
// import { navigate } from 'hookrouter';
import { useHistory } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => { 
    
    let history = useHistory();
    const md5 = require('md5');
    const axios = require('axios');
    const userBasicAuth = Config.UserBasicAuth;
    const passBasicAuth = Config.PassBasicAuth;
    const encryptSessionStorage = Config.EncryptSessionStorage;
    const baseUserAPI = Config.BaseUserAPI;
    let baseJsonUser = Config.BaseJsonUser;
    const userNodeAuth = Config.UserNodeAuth;
    const passNodeAuth = Config.PassNodeAuth;
    const baseNodeAPI = Config.BaseNodeAPI;
    const usernameInput = useRef();
    const passwordInput = useRef();
    const [error, setError] = useState(0);
    const [dataLoadedStatus, setDataLoadedStatus] = useState(true);
    const [errStatus,setErrStatus] = useState({
        show: false,
        type: "", //error, warning, info, success
        message: ""
    })

    const handleErrStatusClose = () => {
       setErrStatus ({show: false, type: "", message: ""});
    }

    // const checkUserID = (customerNumber) =>{
    //     axios({
    //         method: 'get',
    //         url: baseNodeAPI + 'user/' + customerNumber,
    //         // auth: {
    //         //     username: userNodeAuth,
    //         //     password: passNodeAuth
    //         // },
    //       })
    //     .then(res => {
    //         console.log(res)
    //         if(res.status === 200){
    //             if(res.data === null){
    //             AddUserToNode(customerNumber)
    //             return true
    //             }
    //         }
    //     }).catch(err =>{
    //         console.log(err);
    //         return false
    //     });
    // }

    const AddUserToNode = (customerNumber) =>{
        axios({
            method: 'post',
            url: baseNodeAPI + 'user',
            // auth: {
            //     username: userNodeAuth,
            //     password: passNodeAuth
            // },
            data: {
                id: customerNumber 
            }
          })
        .then(res => {
            console.log(res);
            if(res.status === 200){
                console.log(res);
            }
        }).catch(err =>{
            console.log(err);
        });
    }


    const handleLogin = () => {
        setError(0);
        const username = usernameInput.current.value;
        const password = passwordInput.current.value;
        const wrongEmail = 'ไม่พบบัญชีผู้ใช้/รหัสผ่าน หรือ บัญชียังไม่ได้เปิดใช้งาน';
        const notVerifyEmail = 'บัญชีนี้ยังไม่ได้ยืนยันตน';        
        if(username.length === 0 || password.length === 0 ){
            return setError(1);
        }

        baseJsonUser = {
            ...baseJsonUser,
            isfunction: "LOGIN",
            email: username,
            // password: md5(password)
            password: password
        }
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
                console.log(JSON.parse(res.data.value));
                if( JsonToObj.value[0].status === wrongEmail){
                    return setError(1);
                }
                if(JsonToObj.value[0].verify === 'false'){
                    sessionStorage.setItem('firstLogin', 'firstLogin');
                    encryptSessionStorage.encrypt('userIDVerify', username);
                    // return navigate("/verify",{ replace: true });
                    return history.push("/verify");
                } else {
               // checkUserID(JsonToObj.value[0].email);
                encryptSessionStorage.encrypt('customerno', JsonToObj.value[0].customerno);
                encryptSessionStorage.encrypt('fullname', JsonToObj.value[0].fullname);
                encryptSessionStorage.encrypt('userID', JsonToObj.value[0].email);

                
                // encryptSessionStorage.encrypt('admin', 'false');
                encryptSessionStorage.encrypt('admin','true');
                // navigate("/main",{ replace: true });
                history.push("/MainServices");
                }
                encryptSessionStorage.encrypt('admin','true');
                // if(admin){
                //     encryptSessionStorage.encrypt('admin','true');
                // }
            }
        }).catch(err =>{
            console.log(err);
            return setError(1);
            // setErrStatus({show: true, type: 'warning' , message: err})
        });
    }

    useEffect(() => {
        if(sessionStorage.getItem('userID')) history.push("/MainServices");
    }, []);
 

    return (
        <Box>
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
            <Container fluid id="divFormLogin" >
                <Col xs={12} sm={6} md={5} xl={4} style={{maxWidth: '29rem'}}>
                    <Row>
                        <Col sm={12} className="text-center">
                            <label className="uppercase bold" style={{fontSize: 'larger important', margin: '20px auto'}}>Sign In</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div style={{marginBottom:'1rem'}}>
                                <label htmlFor="CustomerEmail" className="form-label label-text">Email Address</label>
                                <input
                                type="text"
                                className="form-control rounded-0 textbox_login_fixed"
                                name="customer[email]"
                                id="CustomerEmail" 
                                ref={usernameInput}
                                spellCheck="false"
                                autoComplete="off"
                                autoCapitalize="off"
                                // value={'cawdwdawdawd'}                                
                                required
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div>
                                <label htmlFor="CustomerPassword" className="form-label label-text">Password</label>
                                <input
                                type="password"
                                className="form-control rounded-0 textbox_login_fixed_pass"
                                name="customer[password]" 
                                id="CustomerPassword" 
                                ref={passwordInput}
                                spellCheck="false"
                                maxLength="40"
                                required
                                />
                                <div style={{color: 'red', fontSize: '0.65rem',textAlign: 'right', opacity: error, transition: 'opacity 0.4s'}}>
                                    USERNAME OR PASSWORD IS INCORRECT
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
                                onClick={handleLogin}
                            >
                                <div>
                                    Sign In
                                </div>
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className="text-center">
                            <a href="/forgot_password" id="RecoverPassword">Forgot your password?</a>
                        </Col>
                    </Row>
                   
                </Col>
            </Container>
        </Box>
      )
  }
  
  export default Login
