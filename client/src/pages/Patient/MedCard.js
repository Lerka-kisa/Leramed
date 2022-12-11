import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Container} from "react-bootstrap";
import MedicalRecordsTable from "../../components/MedicalRecordsTable";
import {fetchGetinfo} from "../../http/userinfoAPI";
import {fetchGetMedcard} from "../../http/medcardsAPI";

const MedCard = observer(() => {
    const {auth} = useContext(Context)
    const {records} = useContext(Context)
    const {userinfo} = useContext(Context)
    useEffect(()=>{
        fetchGetinfo().then(data => {
            userinfo.setUserinfo(data)
        })
    },[userinfo.userinfo.birthday])
    console.log(userinfo.userinfo)
    const user = userinfo.userinfo;
    useEffect(()=>{
        fetchGetMedcard().then(data => {
            console.log(data)
            records.setRecord(data)
        })
    },[])

    return (
        <Container>
            {/*<h1 className="display-3 mt-5 mb-4">{user.last_name} {user.first_name} {user.middle_name}</h1>*/}
            <h1 className="display-5 mt-5 mb-4">Медицинская карта номер {user.card_number} находится {user.card_status}</h1>
            <MedicalRecordsTable records={records.record} className="mt-3" auth ={auth}/>
                        {/*<UserInfoForm user={userinfo.userinfo}></UserInfoForm>*/}


        </Container>
    );
});

export default MedCard;