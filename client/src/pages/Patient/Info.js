import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import UserInfoForm from "../../components/UserInfoTab/UserInfoForm";
import UserAuthInfoForm from "../../components/UserInfoTab/UserAuthInfoForm";
import {fetchGetinfo} from "../../http/userinfoAPI";

const PatientOffice = observer(() => {
    const [updLoginVisible, setLoginVisible] = useState(false)
    const [updPhoneVisible, setPhoneVisible] = useState(false)
    const [updMailVisible, setMailVisible] = useState(false)
    const AuthUpdData = {
        updLoginVisible, setLoginVisible, updPhoneVisible, setPhoneVisible, updMailVisible, setMailVisible
    }
    const [updBirthdayVisible, setBirthdayVisible] = useState(false)
    const [updGenderVisible, setGenderVisible] = useState(false)
    const [updAddressVisible, setAddressVisible] = useState(false)
    const [updPlaceOfWorkVisible, setPlaceOfWorkVisible] = useState(false)
    const UserUpdData = {
        updBirthdayVisible, setBirthdayVisible, updGenderVisible, setGenderVisible, updAddressVisible, setAddressVisible, updPlaceOfWorkVisible, setPlaceOfWorkVisible
    }

    const {userinfo} = useContext(Context)
    useEffect(()=>{
        fetchGetinfo().then(data => {
            userinfo.setUserinfo(data)
        })
    },[updLoginVisible, updPhoneVisible, updMailVisible, updBirthdayVisible, updGenderVisible, updAddressVisible, updPlaceOfWorkVisible])
    const user = userinfo.userinfo;
    return (
        <Container className="mb-5">
            <h1 class="display-1 mt-5 mb-4">{user.last_name} {user.first_name} {user.middle_name}</h1>
            <table className="table" >
                <tbody>
                <tr>
                    <th scope="row" className="w-50">
                        <UserInfoForm user={userinfo.userinfo} user_data={UserUpdData}></UserInfoForm>
                    </th>
                    <td className="w-50">
                        <UserAuthInfoForm user ={userinfo.userinfo} auth_data={AuthUpdData} ></UserAuthInfoForm>
                    </td>
                </tr>
                </tbody>
            </table>
        </Container>
    );
});

export default PatientOffice;