import React, {useContext} from "react";
import {Button, Nav} from "react-bootstrap";
import {
    ADMIN_ANALYSIS_NORM_ROUTE,
    ADMIN_HOUSECALL_ROUTE, ADMIN_PATIENTS_ROUTE,
    ADMIN_TIMETABLE_ROUTE, LOGIN_ROUTE
} from "../../utils/consts";
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
              <Button className="me-2 mx-2" variant={"outline-light"} href= {ADMIN_HOUSECALL_ROUTE} >Вызовы на дом</Button>
              <Button className="me-2 mx-2" variant={"outline-light"} href= {ADMIN_TIMETABLE_ROUTE} >Расписание</Button>
              <Button className="me-2 mx-2" variant={"outline-light"} href= {ADMIN_ANALYSIS_NORM_ROUTE} >Нормы анализов</Button>
              <Button className="me-2 mx-2" variant={"outline-light"} href= {ADMIN_PATIENTS_ROUTE} >Пациенты</Button>
          </Nav>
          <Nav className="me-auto" style={{color: "white"}}>
              <Button className="me-2 mx-2" variant={"outline-danger"} onClick={()=> logout()}>Выйти</Button>
          </Nav>
      </>
)
};

export default AdminMenu;