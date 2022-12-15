import React, {useContext} from 'react';
import {Context} from "../../index";
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import SearchPatientsForm from "../../components/SearchPatientsForm";
import Table from "react-bootstrap/Table";
import {ADMIN_PATIENTS_ROUTE, DOCTOR_PATIENTS_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";

const Patients = observer(() => {
    const {auth} = useContext(Context)
    const {doctors} = useContext(Context)
    const navigate = useNavigate()
    let patients = doctors.patients
    return (
        <Container>
            <h1 className="display-5 mt-5 mb-4">Список пациентов</h1>
            <SearchPatientsForm doctors = {doctors}/>
            <Table striped bordered hover size="sm">
                <thead>
                <tr >
                    <th>ФИО</th>
                    <th>Дата рождения</th>
                    <th>Адрес</th>
                    <th>Номер карточки</th>
                    <th>Статус карты</th>
                </tr>
                </thead>
                <tbody>
                {patients.map(patient =>
                    <tr onClick={() => {(auth.role==="ADMIN")?navigate(ADMIN_PATIENTS_ROUTE + "/" + patient.id):navigate(DOCTOR_PATIENTS_ROUTE + "/" + patient.id)}}>
                        <td>{patient.FIO}</td>
                        <td>{patient.birthday}</td>
                        <td>{patient.address}</td>
                        <td>{patient.card_number}</td>
                        <td>{patient.card_status}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </Container>
    );
});

export default Patients;