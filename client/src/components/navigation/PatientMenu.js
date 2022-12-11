import React, {useContext} from "react";
import {Nav} from "react-bootstrap";
import {
    LOGIN_ROUTE,
    PATIENT_ANALYSIS_ROUTE,
    PATIENT_HOUSECALL_ROUTE, PATIENT_INFO_ROUTE,
    PATIENT_MEDCARDS_ROUTE,
    PATIENT_TICKET_ROUTE
} from "../../utils/consts";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";


const PatientMenu = () => {
    const {auth} = useContext(Context)
    const navigate = useNavigate()

    const logout = async () => {
        //await logout()
        localStorage.clear()
        auth.check()
        navigate(LOGIN_ROUTE)
    }

    return (
        <>
            <Nav className="mx-auto" style={{color: "white"}}>
                <Nav.Link href= {PATIENT_TICKET_ROUTE} >Талоны</Nav.Link>
                <Nav.Link href= {PATIENT_HOUSECALL_ROUTE} >Вызов на дом</Nav.Link>
                <Nav.Link href= {PATIENT_ANALYSIS_ROUTE} >Анализы</Nav.Link>
                <Nav.Link href= {PATIENT_MEDCARDS_ROUTE} >Медицинская карта</Nav.Link>
            </Nav>
            <Nav className="mx-auto" style={{color: "white"}}>
                <Nav.Link href= {PATIENT_INFO_ROUTE} >Личный кабинет</Nav.Link>
                <Nav.Link onClick={()=> logout()}>Выйти</Nav.Link>
            </Nav>
        </>)
};


export default PatientMenu;