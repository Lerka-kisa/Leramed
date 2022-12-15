import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {Table} from "@mui/material";
import {observer} from "mobx-react-lite";
import SearchPatientsForm from "../SearchPatientsForm";
import {addHousecall} from "../../http/housecallAPI";

const AddHousecallModal = observer(({show, onHide}) => {
    let today  = new Date().toISOString().split('T')[0]

    const {doctors} = useContext(Context)
    const {auth} = useContext(Context)
    let patients = doctors.patients
    const [selectedPatient,setSelectedPatient] = useState('')
    const [remark,setRemark] = useState('')

    const addHouseCallL = () => {
        addHousecall(today,selectedPatient.id,remark).then(data => onHide())
        setSelectedPatient('')
        setRemark('')
    }
    const addHouseCallP = () => {
        addHousecall(today,auth.id_acc,remark).then(data => onHide())
        setRemark('')
    }

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
                {(auth.role==="PATIENT")
                    ?
                    <></>
                    :
                    <>
                        <SearchPatientsForm doctors = {doctors}/>
                        <Table striped bordered hover size="sm">
                            <thead>
                            <tr >
                                <th>ФИО</th>
                            </tr>
                            </thead>
                            <tbody>
                            {patients.map(patient =>
                                <tr onClick={()=>{setSelectedPatient(patient);}}>
                                    <td>{patient.FIO}</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </>
                }
                <Form>
                    <Table className="table">
                        <tbody>
                        {(auth.role === 'PATIENT')
                            ?
                            <></>
                            :
                            <tr>
                                <th scope="row">
                                    Пациент
                                </th>
                                <td>
                                    <Form.Control
                                        value={selectedPatient.FIO}
                                        readOnly
                                        className="mt-3"
                                        type="text"
                                    />
                                </td>
                            </tr>
                        }
                        <tr>
                            <th scope="row">
                                Жалобы
                            </th>
                            <td>
                                <Form.Control
                                    value={remark}
                                    onChange={e => setRemark(e.target.value)}
                                    className="mt-3"
                                    placeholder="Жалобы..."
                                />
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {(auth.role === 'PATIENT')
                    ?
                    <>
                        <Button variant="secondary" onClick={onHide}>Отмена</Button>
                        {(remark)
                            ?
                            <Button variant="primary" onClick={() => addHouseCallP()}>Сохранить</Button>
                            :
                            <></>
                        }
                    </>
                    :
                    <>
                        <Button variant="secondary" onClick={onHide}>Отмена</Button>
                        {(selectedPatient&&remark)
                            ?
                            <Button variant="primary" onClick={() => addHouseCallL()}>Сохранить</Button>
                            :
                            <></>
                        }
                    </>
                }
            </Modal.Footer>

        </Modal>
    );
});

export default AddHousecallModal;