import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {fetchGetPatients} from "../../http/doctorsAPI";
import PatientsTable from "../../components/PatientsTable";

import {observer} from "mobx-react-lite";
import SearchPatientsForm from "../../components/SearchPatientsForm";
import TableMedCards from "./TableMedCards";
import MedCard from "../Patient/MedCard";
import Table from "react-bootstrap/Table";
import MedicalRecordsTable from "../../components/MedicalRecordsTable";
import {fetchGetMedcard, fetchGetMedcardId} from "../../http/medcardsAPI";
import AddRecordModal from "../../components/MedcardsTab/Modals/AddRecordModal";

const Patients = observer(() => {

    const {auth} = useContext(Context)
    const {doctors} = useContext(Context)
    const {records} = useContext(Context)
    const [isCard, setIsCard] = useState(false)
    const [idCard, setIdCard] = useState(1)
    const [patient, setPatient] = useState({})
    const [addRecordVisible, setAddRecordVisible] = useState(false)

    useEffect(()=>{
        fetchGetMedcardId(idCard).then(data => {
            records.setRecord(data)
        })
    })

    let patients = doctors.patients
    return (
        <Container>
            {(!isCard)
                ?
                <>
                    <h1 className="display-5 mt-5 mb-4">Список пациентов</h1>
                    <SearchPatientsForm doctors = {doctors}/>
                    {/*<PatientsTable patients={doctors.patients} className="mt-3" />*/}
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
                            <tr onClick={() => {setIsCard(true); setIdCard(patient.id); setPatient(patient)}}>
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
                :
                <>
                    <h1 className="display-5 mt-5 mb-4">Медицинская карта номер {patient.card_number} находится {patient.card_status}</h1>
                    <MedicalRecordsTable records={records.record} className="mt-3" auth ={auth}/>
                    <Button
                        className="btn btn-primary float-start mt-2"
                        onClick={()=> setAddRecordVisible(true)}
                    >Добавить запись</Button>
                    <AddRecordModal id_medcard={patient.id_medcard} show={addRecordVisible} onHide={() => setAddRecordVisible(false)}/>
                </>
            }


        </Container>
    );
});

export default Patients;