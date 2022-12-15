import React, {useContext} from 'react';
import {Context} from "../../index";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {Table} from "@mui/material";
import SearchPatientsForm from "../SearchPatientsForm";
import {observer} from "mobx-react-lite";
import {setPatientInApp} from "../../http/timetableAPI";

const SetPatientModal = observer(({show, onHide, id_app}) => {
    console.log(id_app)
    const {doctors} = useContext(Context)

    const addPatientL = (id_patient) => {
        setPatientInApp(id_app,id_patient).then(data => onHide())
    }

    let patients = doctors.patients
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Выберите пациента</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <SearchPatientsForm doctors = {doctors}/>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr >
                                <th>ФИО</th>
                            </tr>
                        </thead>
                        <tbody>
                        {patients.map(patient =>
                            <tr onClick={()=>{addPatientL(patient.id);}}>
                                <td>{patient.FIO}</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Отмена</Button>
            </Modal.Footer>

        </Modal>
    );
});

export default SetPatientModal;