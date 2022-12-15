import React from 'react';
import {observer} from "mobx-react-lite";
import LoginModal from "./Modals/LoginModal";
import PhoneModal from "./Modals/PhoneModal";
import MailModal from "./Modals/MailModal";
import {Button} from "react-bootstrap";
import {Table} from "@mui/material";

const UserAuthInfoForm = observer(({user, auth_data}) => {
    return (
        <>
            <h1 className="h1"><u>Данные для авторизации</u></h1>

            <Table className="table" >
                <tbody>
                <tr>
                    <th scope="row" className="w-50">
                        <label htmlFor="exampleInputLogin" className="h2 form-label">login:</label>
                    </th>
                    <td>
                        <label className="h2 fw-normal form-label">{user.login}</label>
                    </td>
                    <td>
                        <Button
                            className="btn btn-primary float-end mt-2"
                            onClick={()=> auth_data.setLoginVisible(true)}
                        >Изменить</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label htmlFor="exampleInputPhone" className="h2 form-label">телефон:</label>
                    </th>
                    <td>
                        <label className="h2 fw-normal form-label">{user.phone}</label>
                    </td>
                    <td>
                        <Button
                            className="btn btn-primary float-end mt-2"
                            onClick={()=> auth_data.setPhoneVisible(true)}
                        >Изменить</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label htmlFor="exampleInputMail" className="h2 form-label">эл. почта:</label>
                    </th>
                    <td>
                        <label className="h2 fw-normal form-label">{user.mail}</label>
                    </td>
                    <td>
                        <Button
                            className="btn btn-primary float-end mt-2"
                            onClick={()=> auth_data.setMailVisible(true)}
                        >Изменить</Button>
                    </td>
                </tr>

                </tbody>
            </Table>
            <LoginModal show={auth_data.updLoginVisible} onHide={() => auth_data.setLoginVisible(false)}/>
            <PhoneModal show={auth_data.updPhoneVisible} onHide={() => auth_data.setPhoneVisible(false)}/>
            <MailModal show={auth_data.updMailVisible} onHide={() => auth_data.setMailVisible(false)}/>
        </>
    );
});

export default UserAuthInfoForm;