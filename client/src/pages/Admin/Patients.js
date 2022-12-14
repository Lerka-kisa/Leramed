import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import SearchPatientsForm from "../../components/SearchPatientsForm";
import Table from "react-bootstrap/Table";
import MedicalRecordsTable from "../../components/MedicalRecordsTable";
import {fetchGetMedcardId} from "../../http/medcardsAPI";
import AddRecordModal from "../../components/MedcardsTab/Modals/AddRecordModal";
import {fetchGetAnalysisId} from "../../http/analysisAPI";
import AnalysisTable from "../../components/AnalysisTable";
import AddAnalysisResultModal from "../../components/MedcardsTab/Modals/AddAnalysisResultModal";

const Patients = observer(() => {

    const {auth} = useContext(Context)
    const {doctors} = useContext(Context)
    const {records} = useContext(Context)
    const {analysis} = useContext(Context)
    const [isCard, setIsCard] = useState(false)
    const [idCard, setIdCard] = useState(1)
    const [patient, setPatient] = useState({})
    const [addRecordVisible, setAddRecordVisible] = useState(false)
    const [addResultVisible, setAddResultVisible] = useState(false)

    useEffect(()=>{
        fetchGetMedcardId(idCard).then(data => {
            records.setRecord(data)
        })
    },[idCard,addRecordVisible])
    useEffect(()=>{
        fetchGetAnalysisId(idCard).then(data => {
            analysis.setAnalysis(data)
        })
    },[idCard,addResultVisible])

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
                    <div>
                        <h1 className="display-5 mt-5 mb-4">Медицинская карта номер {patient.card_number} находится {patient.card_status}</h1>
                        <MedicalRecordsTable records={records.record} className="mt-3" auth ={auth}/>
                        {(auth.role === "DOCTOR")?
                        <Button
                            className="btn btn-primary float-start mt-2 mb-3"
                            onClick={()=> setAddRecordVisible(true)}
                        >Добавить запись</Button>:<></>}
                        <br/><br/>
                    </div>
                    <div>
                        <h3 className="display-6 mt-3 mb-4">Результаты анализов пациента</h3>
                        <AnalysisTable analysis={analysis.analysis} className="mt-4" auth ={auth}/>
                        {(auth.role === "DOCTOR")?
                        <Button
                            className="btn btn-primary float-start mt-2 mb-3"
                            onClick={()=> setAddResultVisible(true)}
                        >Добавить результат</Button>:<></>}
                        <br/><br/>
                    </div>

                    <AddRecordModal id_medcard={patient.id_medcard} records={records} show={addRecordVisible} onHide={() => setAddRecordVisible(false)}/>
                    <AddAnalysisResultModal id_medcard={patient.id_medcard} show={addResultVisible} onHide={() => setAddResultVisible(false)}/>
                </>
            }
        </Container>
    );
});

export default Patients;