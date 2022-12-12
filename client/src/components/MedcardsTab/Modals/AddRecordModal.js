import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {Table} from "@mui/material";
import {Context} from "../../../index";
import {addRecord} from "../../../http/medcardsAPI";

const AddRecordModal = ({show, onHide, id_medcard}) => {

    const [date, setDate] = useState('')
    const [record, setRecord] = useState('')
    const [recommendation, setRecommendation] = useState('')
    const addRecordL = () => {
        //console.log(address)
        addRecord(id_medcard, date, record, recommendation).then(data => onHide());
        //updateAddress(name)
        //createDevice(formData).then(data => onHide())
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Запись приёма</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Table className="table" >
                        <tbody>
                        <tr>
                            <th scope="row">
                                Дата приёма
                            </th>
                            <td>
                                <Form.Control
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                    className="mt-3"
                                    type="date"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Ход приёма и жалобы пациента
                            </th>
                            <td>
                                <Form.Control
                                    value={record}
                                    onChange={e => setRecord(e.target.value)}
                                    className="mt-3"
                                    placeholder="Введите данные..."
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Рекомендации по лечению
                            </th>
                            <td>
                                <Form.Control
                                    value={recommendation}
                                    onChange={e => setRecommendation(e.target.value)}
                                    className="mt-3"
                                    placeholder="Введите ваш адрес..."
                                />
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Отмена</Button>
                <Button variant="primary" onClick={addRecordL}>Сохранить изменения</Button>
            </Modal.Footer>

        </Modal>
    );
};

export default AddRecordModal;




