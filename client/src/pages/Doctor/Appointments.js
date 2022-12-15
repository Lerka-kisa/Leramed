import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import AllTicketsTable from "../../components/Applications/AllTicketsTable";
import {observer} from "mobx-react-lite";

import {useParams} from 'react-router-dom'
import SetPatientModal from "../../components/Applications/SetPatientModal";
import UpdPatModal from "../../components/Applications/UpdPatModal";
import AddRecordModal from "../../components/MedcardsTab/Modals/AddRecordModal";

const Appointments = observer(() => {

    const [addPatientVisible, setAddPatientVisible] = useState(false)
    const [updPatientVisible, setUpdPatientVisible] = useState(false)
    const [addRecordVisible, setAddRecordVisible] = useState(false)
    const [idApp, setIdApp] = useState('')
    const [patient, setPatient] = useState('')

    const {id} = useParams()
    return (
        <Container>
            <div className="mt-5"></div>
            <AllTicketsTable className='mt-5' id={id} setPatient={setPatient} setIdApp={setIdApp}
                             updPatientVisible={updPatientVisible} setUpdPatientVisible={setUpdPatientVisible}
                             addPatientVisible={addPatientVisible} setAddPatientVisible = {setAddPatientVisible}
                             addRecordVisible={addRecordVisible} setAddRecordVisible={setAddRecordVisible}
            />

            <SetPatientModal id_app={idApp} show={addPatientVisible} onHide={() => setAddPatientVisible(false)}/>
            <UpdPatModal id_app={idApp} patient={patient} onHide={() => setUpdPatientVisible(false)} show={updPatientVisible}/>
            <AddRecordModal id_medcard={patient.id_medcard} show={addRecordVisible} onHide={() => setAddRecordVisible(false)}/>
        </Container>
    );
});

export default Appointments;