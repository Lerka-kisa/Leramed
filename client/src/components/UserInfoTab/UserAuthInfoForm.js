import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import LoginModal from "./Modals/LoginModal";
import PhoneModal from "./Modals/PhoneModal";
import MailModal from "./Modals/MailModal";
import {Button} from "react-bootstrap";
import {Table} from "@mui/material";

const UserAuthInfoForm = observer(({user}) => {
    const [updLoginVisible, setLoginVisible] = useState(false)
    const [updPhoneVisible, setPhoneVisible] = useState(false)
    const [updMailVisible, setMailVisible] = useState(false)
    return (
        <>
            <h1 className="display-5">Данные для авторизации</h1>

            <Table className="table" >
                <tbody>
                <tr>
                    <th scope="row" className="w-50">
                        <label htmlFor="exampleInputLogin" className="display-6 form-label">login:</label>
                    </th>
                    <td>
                        <label className="display-6 form-label">{user.login}</label>
                        {/*<input type="text" className="form-control mt-2" id="exampleInputLogin" value={user.login}/>*/}
                    </td>
                    <td>
                        <Button
                            className="btn btn-primary float-end mt-2"
                            onClick={()=> setLoginVisible(true)}
                        >Изменить</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label htmlFor="exampleInputPhone" className="display-6 form-label">телефон:</label>
                    </th>
                    <td>
                        <label className="display-6 form-label">{user.phone}</label>
                        {/*<input type="text" className="form-control mt-2" id="exampleInputPhone" value={user.phone}/>*/}
                    </td>
                    <td>
                        <Button
                            className="btn btn-primary float-end mt-2"
                            onClick={()=> setPhoneVisible(true)}
                        >Изменить</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label htmlFor="exampleInputMail" className="display-6 form-label">эл. почта:</label>
                    </th>
                    <td>
                        <label className="display-6 form-label">{user.mail}</label>
                        {/*<input type="text" className="form-control mt-2" id="exampleInputMail" value={user.mail}/>*/}
                    </td>
                    <td>
                        <Button
                            className="btn btn-primary float-end mt-2"
                            onClick={()=> setMailVisible(true)}
                        >Изменить</Button>
                    </td>
                </tr>

                </tbody>
            </Table>
            <LoginModal show={updLoginVisible} onHide={() => setLoginVisible(false)}/>
            <PhoneModal show={updPhoneVisible} onHide={() => setPhoneVisible(false)}/>
            <MailModal show={updMailVisible} onHide={() => setMailVisible(false)}/>
        </>
    );
});

export default UserAuthInfoForm;