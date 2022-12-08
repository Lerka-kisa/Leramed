import React from "react";
import {Button, Nav} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";

const GuestMenu = () => {
    return (
        <>
            <Nav className="ml-auto" style={{color: "white"}}>
                <Button variant={"outline-light"} href= {LOGIN_ROUTE} >Войти</Button>
                <Button variant={"outline-light"} href= {REGISTRATION_ROUTE} >Зарегистрироваться</Button>
            </Nav>
        </>)
    //onClick={()=> user.setRole(1)}
};
export default GuestMenu;