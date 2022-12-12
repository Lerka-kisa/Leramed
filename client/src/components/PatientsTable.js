import React from 'react';
import Table from "react-bootstrap/Table";
import {observer} from "mobx-react-lite";
import {DOCTOR_PATIENTS_ROUTE} from "../utils/consts";

const PatientsTable = observer(({patients}) => {

    return (
        <>
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
                    <tr onClick={() => {setIsCard(true); setIdCard(patient.id)}}>
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