import React, {useContext} from "react";
import {Routes, Route} from "react-router-dom";
import {adminRoutes, doctorRoutes, patientRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import Main from "../pages/Main";

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)

    return (
        <Routes>
            {user.role === "ADMIN" && adminRoutes.map(({path, Component}) =>
                <Route key = {path} path = {path} element = {<Component/>} exact/>
            )}
            {user.role === "DOCTOR" && doctorRoutes.map(({path, Component}) =>
                <Route key = {path} path = {path} element = {<Component/>} exact/>
            )}
            {user.role === "PATIENT" && patientRoutes.map(({path, Component}) =>
                <Route key = {path} path = {path} element = {<Component/>} exact/>
            )}
            {user.role === "GUEST" && publicRoutes.map(({path, Component}) =>
                <Route key = {path} path = {path} element = {<Component/>} exact/>
            )}
            <Route path="*" element = {<Main></Main>}/>
        </Routes>
    )
}

export default AppRouter;