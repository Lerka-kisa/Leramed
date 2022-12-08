import React, {useContext} from "react";
import {Button, Dropdown, Nav} from "react-bootstrap";
import {
    DOCTOR_ANALYSIS_NORM_ROUTE,
    DOCTOR_ANALYSIS_ROUTE,
    DOCTOR_APPOINTMENTS_ROUTE,
    DOCTOR_HOUSECALL_ROUTE, DOCTOR_INFO_ROUTE, DOCTOR_PATIENTS_ROUTE,
    DOCTOR_TICKET_ROUTE, LOGIN_ROUTE, LOGOUT_ROUTE
} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
import {Context} from "../../index";
import DropdownItem from "react-bootstrap/DropdownItem";
const DoctorMenu = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logout = async () => {
        //await logout()
        localStorage.clear()
        user.check()
        navigate(LOGIN_ROUTE)
    }
    return (
        <>
            <Nav className="mx-auto" style={{color: "white"}}>
                <Button variant={"outline-success"} href= {DOCTOR_APPOINTMENTS_ROUTE} >Приём</Button>
                <Button variant={"outline-warning"} href= {DOCTOR_TICKET_ROUTE} >Талоны</Button>
                <Button variant={"outline-primary"} href= {DOCTOR_HOUSECALL_ROUTE} >Вызовы на дом</Button>
                <Dropdown>
                    <Dropdown.Toggle>Анализы</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <DropdownItem href= {DOCTOR_ANALYSIS_ROUTE}>Анализы пациентов</DropdownItem>
                        <DropdownItem href= {DOCTOR_ANALYSIS_NORM_ROUTE}>База анализов и норм</DropdownItem>
                    </Dropdown.Menu>
                </Dropdown>
                <Button variant={"outline-light"} href= {DOCTOR_PATIENTS_ROUTE} className="ml-4" >Пациенты</Button>
            </Nav>
            <Nav className="me-auto" style={{color: "white"}}>
                <Button variant={"outline-info"} href= {DOCTOR_INFO_ROUTE} >Личный кабинет</Button>
                <Button variant={"outline-danger"} href= {LOGOUT_ROUTE} onClick={()=> logout()}>Выйти</Button>
            </Nav>
        </>
    )
};


export default DoctorMenu;