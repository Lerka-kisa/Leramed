import React, {useContext} from "react";
import {Button, Nav} from "react-bootstrap";
import {
    LOGIN_ROUTE,
    PATIENT_ANALYSIS_ROUTE,
    PATIENT_HOUSECALL_ROUTE, PATIENT_INFO_ROUTE,
    PATIENT_MEDCARDS_ROUTE, PATIENT_MY_TICKET_ROUTE,
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
                <Button className="me-2 mx-2" variant={"outline-light"} href= {PATIENT_TICKET_ROUTE} >Талоны</Button>
                <Button className="me-2 mx-2" variant={"outline-light"} href= {PATIENT_HOUSECALL_ROUTE} >Вызов на дом</Button>
                <Button className="me-2 mx-2" variant={"outline-light"} href= {PATIENT_ANALYSIS_ROUTE} >Анализы</Button>
                <Button className="me-2 mx-2" variant={"outline-light"} href= {PATIENT_MEDCARDS_ROUTE} >Медицинская карта</Button>
            </Nav>
            <Nav className="mx-auto" style={{color: "white"}}>
                <Button className="me-2 mx-2" variant={"outline-light"} href= {PATIENT_INFO_ROUTE} >Личный кабинет</Button>
                <Button className="me-2 mx-2" variant={"outline-light"} href= {PATIENT_MY_TICKET_ROUTE} >Заказанные талоны</Button>
                <Button className="me-2 mx-2" variant={"outline-danger"} onClick={()=> logout()}>Выйти</Button>
            </Nav>
        </>)
};


export default PatientMenu;