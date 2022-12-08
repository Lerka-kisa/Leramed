import React, {useContext} from "react";
import {Dropdown, Nav} from "react-bootstrap";
import {
    ADMIN_ANALYSIS_NORM_ROUTE,
    ADMIN_ANALYSIS_ROUTE,
    ADMIN_DOCTOR_ROUTE,
    ADMIN_HOUSECALL_ROUTE,
    ADMIN_TICKET_ROUTE,
    ADMIN_TIMETABLE_ROUTE, LOGIN_ROUTE
} from "../../utils/consts";
import DropdownItem from "react-bootstrap/DropdownItem";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
const AdminMenu = () => {
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
              <Nav.Link href= {ADMIN_TICKET_ROUTE} >Талоны</Nav.Link>
              <Nav.Link href= {ADMIN_HOUSECALL_ROUTE} >Вызовы на дом</Nav.Link>
              <Nav.Link href= {ADMIN_TIMETABLE_ROUTE} >Расписание</Nav.Link>
              <Nav.Link href= {ADMIN_DOCTOR_ROUTE} >Врачи</Nav.Link>
              <Dropdown>
                  <Dropdown.Toggle>Анализы</Dropdown.Toggle>
                  <Dropdown.Menu>
                      <DropdownItem href= {ADMIN_ANALYSIS_ROUTE}>Анализы пациентов</DropdownItem>
                      <DropdownItem href= {ADMIN_ANALYSIS_NORM_ROUTE}>База анализов и норм</DropdownItem>
                  </Dropdown.Menu>
              </Dropdown>
          </Nav>
          <Nav className="me-auto" style={{color: "white"}}>
              <Nav.Link onClick={()=> logout()}>Выйти</Nav.Link>
          </Nav>
      </>
)
};

export default AdminMenu;