import React, {useContext, useEffect} from 'react';
import Table from "react-bootstrap/Table";
import RecordModal from "./MedcardsTab/Modals/RecordModal";
import {Context} from "../index";
import {fetchGetPatients} from "../http/doctorsAPI";
import {observer} from "mobx-react-lite";

const PatientsTable = observer(() => {
    const {doctors} = useContext(Context)
    //const {auth} = useContext(Context)
    // const {records} = useContext(Context)

    useEffect(()=>{
        fetchGetPatients().then(data => doctors.setPatients(data))
    }, [doctors.patients])
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Дата рождения</th>
                    <th>Адрес</th>
                    <th>Номер карточки</th>
                    <th>Статус карты</th>
                </tr>
                </thead>
                <tbody>
                {doctors.patients.map(patient =>
                    <tr>
                        <td>{patient.FIO}</td>
                        <td>{patient.birthday}</td>
                        <td>{patient.address}</td>
                        <td>{patient.card_number}</td>
                        <td>{patient.card_status}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </>
    );
});

export default PatientsTable;