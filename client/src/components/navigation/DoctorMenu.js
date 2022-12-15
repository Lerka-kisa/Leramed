import React, {useContext} from "react";
import {Button, Nav} from "react-bootstrap";
import {
    DOCTOR_ANALYSIS_NORM_ROUTE,
    DOCTOR_HOUSECALL_ROUTE,
    DOCTOR_PATIENTS_ROUTE,
    DOCTOR_TIMETABLE_ROUTE,
    LOGIN_ROUTE, LOGOUT_ROUTE
} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
import {Context} from "../../index";
const DoctorMenu = () => {
    const {auth} = useContext(Context)
    const navigate = useNavigate()

    const logout = async () => {
        localStorage.clear()
        auth.check()
        navigate(LOGIN_ROUTE)
    }
    return (
        <>
            <Nav className="mx-auto me-auto" style={{color: "white"}}>
                <Button className="me-2 mx-2" variant={"outline-light"} href= {DOCTOR_TIMETABLE_ROUTE} >Приёмы</Button>
                <Button className="me-2 mx-2" variant={"outline-light"} href= {DOCTOR_HOUSECALL_ROUTE} >Вызовы на дом</Button>
                <Button className="me-2 mx-2" variant={"outline-light"} href= {DOCTOR_ANALYSIS_NORM_ROUTE} >Нормы анализов</Button>
                <Button className="me-2 mx-2" variant={"outline-light"} href= {DOCTOR_PATIENTS_ROUTE}>Пациенты</Button>
            </Nav>
            <Nav className="me-auto" style={{color: "white"}}>
                <Button variant={"outline-danger"} href= {LOGOUT_ROUTE} onClick={()=> logout()}>Выйти</Button>
            </Nav>
        </>
    )
};

export default DoctorMenu;