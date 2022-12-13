import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {CLINIK_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import PatientMenu from "./navigation/PatientMenu";
import DoctorMenu from "./navigation/DoctorMenu";
import AdminMenu from "./navigation/AdminMenu";
import GuestMenu from "./navigation/GuestMenu";

const NavBar = observer(() => {
    const {auth} = useContext(Context)
    let Menu = <></>
    switch (auth.role) {
        case "ADMIN":
            Menu = <AdminMenu></AdminMenu>
            break
        case "DOCTOR":
            Menu = <DoctorMenu></DoctorMenu>
            break
        case "PATIENT":
            Menu = <PatientMenu></PatientMenu>
            break
        default:
            Menu = <GuestMenu></GuestMenu>
            break

    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} className='display-6 mb-2' to={CLINIK_ROUTE}>LeraMed</NavLink>
                {Menu}
            </Container>
        </Navbar>
    );
});

export default NavBar;