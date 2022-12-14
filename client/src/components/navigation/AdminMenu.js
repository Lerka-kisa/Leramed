import React, {useContext} from "react";
import {Dropdown, Nav} from "react-bootstrap";
import {
    ADMIN_ANALYSIS_NORM_ROUTE,
    ADMIN_ANALYSIS_ROUTE,
    ADMIN_DOCTOR_ROUTE,
    ADMIN_HOUSECALL_ROUTE, ADMIN_MEDCARDS_ROUTE, ADMIN_PATIENTS_ROUTE,
    ADMIN_TICKET_ROUTE,
    ADMIN_TIMETABLE_ROUTE, LOGIN_ROUTE
} from "../../utils/consts";
import DropdownItem from "react-bootstrap/DropdownItem";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
const AdminMenu = () => {
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
              <Nav.Link href= {ADMIN_TICKET_ROUTE} >Талоны</Nav.Link>
              <Nav.Link href= {ADMIN_HOUSECALL_ROUTE} >Вызовы на дом</Nav.Link>
              <Nav.Link href= {ADMIN_TIMETABLE_ROUTE} >Расписание</Nav.Link>
              <Nav.Link href= {ADMIN_DOCTOR_ROUTE} >Врачи</Nav.Link>
              <Nav.Link href= {ADMIN_ANALYSIS_NORM_ROUTE} >Нормы анализов</Nav.Link>
              <Nav.Link href= {ADMIN_PATIENTS_ROUTE} >Пациенты</Nav.Link>
          </Nav>
          <Nav className="me-auto" style={{color: "white"}}>
              <Nav.Link onClick={()=> logout()}>Выйти</Nav.Link>
          </Nav>
      </>
)
};

export default AdminMenu;