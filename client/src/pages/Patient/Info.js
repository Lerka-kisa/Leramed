import React, {useContext, useEffect} from 'react';
import {Context} from "../../index";
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import UserInfoForm from "../../components/UserInfoTab/UserInfoForm";
import UserAuthInfoForm from "../../components/UserInfoTab/UserAuthInfoForm";
import {fetchGetinfo} from "../../http/userinfoAPI";

const PatientOffice = observer(() => {
    const {userinfo} = useContext(Context)
    useEffect(()=>{
        fetchGetinfo().then(data => {
            console.log(data)
            userinfo.setUserinfo(data)
        })
    },[userinfo.userinfo])
    const user = userinfo.userinfo;
    return (
        <Container className="mb-5">
            <h1 class="display-1 mt-5 mb-4">{user.last_name} {user.first_name} {user.middle_name}</h1>
            <table className="table" >
                <tbody>
                <tr>
                    <th scope="row" className="w-50">
                        <UserInfoForm user={userinfo.userinfo}></UserInfoForm>
                    </th>
                    <td className="w-50">
                        <UserAuthInfoForm user ={userinfo.userinfo}></UserAuthInfoForm>
                    </td>
                </tr>
                </tbody>
            </table>
        </Container>
    );
});

export default PatientOffice;