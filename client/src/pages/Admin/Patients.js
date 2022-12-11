import React, {useContext, useEffect} from 'react';
import {Context} from "../../index";
import {Container} from "react-bootstrap";
import {fetchGetPatients} from "../../http/doctorsAPI";
import PatientsTable from "../../components/PatientsTable";

const Patients = () => {


    //console.log(doctors.patients.length)
    return (

        <Container>
            {/*<h1 className="display-3 mt-5 mb-4">{user.last_name} {user.first_name} {user.middle_name}</h1>*/}
            <h1 className="display-5 mt-5 mb-4">Список пациентов</h1>
            <PatientsTable  className="mt-3" />
            {/*<UserInfoForm user={userinfo.userinfo}></UserInfoForm>*/}


        </Container>
    );
};

export default Patients;