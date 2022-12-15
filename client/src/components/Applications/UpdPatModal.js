import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchCardStatuses,updStatus} from "../../http/timetableAPI";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {Table} from "@mui/material";

const UpdPatModal = observer(({show, onHide, id_app, patient}) => {
    const {userinfo} = useContext(Context)
    const [buttonVision,setButtonVision] = useState(false)
    const [new_status,setNewStatus] = useState(patient.card_status)

    useEffect(()=>{
        fetchCardStatuses().then(data => userinfo.setCardStatus(data))
    },[])

    const updStatusL = (id_medcard) => {
        updStatus(id_medcard,new_status).then(data => onHide())
        setButtonVision(false)
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Пациент {id_app}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Table striped bordered hover size="sm">
                        <tbody>
                            <tr>
                                <td>ФИО</td>
                                <td>{patient.last_name + " " + patient.first_name + " " + patient.middle_name}</td>
                            </tr>
                            <tr className="mt-2">
                                <td>Статус карты</td>
                                <td>
                                    <Form.Select aria-label="Default select example" onChange={e =>{setNewStatus(e.target.value);setButtonVision(true)}}>
                                        {userinfo.card_status.map(status =>
                                            <option value={status.id}>{status.status}</option>
                                        )}
                                    </Form.Select>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Отмена</Button>
                {(buttonVision)
                    ?
                    <Button variant="primary" onClick={() => updStatusL(patient.id_medcard)}>Сохранить</Button>
                    :
                    <></>
                }
            </Modal.Footer>
        </Modal>
    );
});

export default UpdPatModal;