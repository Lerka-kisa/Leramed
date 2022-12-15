import React, {useContext, useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import MedicalRecordsTable from "../../components/MedicalRecordsTable";
import AnalysisTable from "../../components/AnalysisTable";
import AddRecordModal from "../../components/MedcardsTab/Modals/AddRecordModal";
import AddAnalysisResultModal from "../../components/MedcardsTab/Modals/AddAnalysisResultModal";
import {useParams} from "react-router-dom";
import {Context} from "../../index";
import {fetchGetMedcardId, fetchGetPatientByMedcard} from "../../http/medcardsAPI";
import {fetchGetAnalysisId} from "../../http/analysisAPI";
import {observer} from "mobx-react-lite";

const PatientsMedcard = observer(() => {
    const {id} = useParams()
    const {auth} = useContext(Context)
    const {records} = useContext(Context)
    const {analysis} = useContext(Context)
    const {doctors} = useContext(Context)

    const [addRecordVisible, setAddRecordVisible] = useState(false)
    const [addResultVisible, setAddResultVisible] = useState(false)

    useEffect(()=>{
        fetchGetPatientByMedcard(id).then(data => {
            doctors.setPatients(data)
        })
    },[])
    const patient = doctors.patients
    useEffect(()=>{
        fetchGetMedcardId(id).then(data => {
            records.setRecord(data)
        })
    },[addRecordVisible])
    useEffect(()=>{
        fetchGetAnalysisId(id).then(data => {
            analysis.setAnalysis(data)
        })
    },[addResultVisible])
    return (
        <Container>
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

                <AddRecordModal id_medcard={id} show={addRecordVisible} onHide={() => setAddRecordVisible(false)}/>
                <AddAnalysisResultModal id_medcard={id} show={addResultVisible} onHide={() => setAddResultVisible(false)}/>
        </Container>
    );
});

export default PatientsMedcard;