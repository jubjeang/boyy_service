// import React from "react";
import { EncryptStorage } from 'storage-encryption';

const secret_key = process.env.REACT_APP_SECRET_KEY;
const encryptSessionStorage = new EncryptStorage(secret_key, 'sessionStorage');
const encryptLocalStorage = new EncryptStorage(secret_key, 'localStorage');
const userBasicAuth = process.env.REACT_APP_BASIC_AUTH_USERNAME;
const passBasicAuth = process.env.REACT_APP_BASIC_AUTH_PASSWORD;
const baseAPI = process.env.REACT_APP_BASE_API;
const getUser = process.env.REACT_APP_BASE_API_TYPE_USER;
const getPageData = process.env.REACT_APP_BASE_API_TYPE_PAGE_DATA;
const getCompanys = process.env.REACT_APP_COMPANY_CODE;
const baseUserAPI = baseAPI + getUser + getCompanys;
const basePageDataAPI =  baseAPI + getPageData + getCompanys;
const userNodeAuth = process.env.REACT_APP_NODE_AUTH_USERNAME
const passNodeAuth = process.env.REACT_APP_NODE_AUTH_PASSWORD
const baseNodeAPI = process.env.REACT_APP_BASE_API_NODE
const baseJsonUser = {
    "isfunction":"",
    "email":"",
    "password":"",
    "newpassword":"",
    "verifycode":"",
    "username":"",
    "phone":"",
    "mobile":"",
    "fullname":"",
    "customerno":"",
    "typeuser":"SERVICE"
}

const baseJsonPageData = {
    "pagesfilter":"",
    "customerno":"",
    "docno":"",
    "datefilter":"",
    "typefunc":""
}

export const Config = {
    UserBasicAuth: userBasicAuth,
    PassBasicAuth: passBasicAuth,
    GetCompanys : getCompanys,
    EncryptSessionStorage: encryptSessionStorage,
    BaseUserAPI: baseUserAPI,
    BasePageDataAPI: basePageDataAPI,
    BaseJsonUser: baseJsonUser,
    BaseJsonPageData:baseJsonPageData,
    UserNodeAuth: userNodeAuth,
    PassNodeAuth: passNodeAuth,
    BaseNodeAPI: baseNodeAPI
}

