import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {Table} from "@mui/material";
import {addRecord} from "../../../http/medcardsAPI";

const AddRecordModal = ({show, onHide, id_medcard}) => {
    let today  = new Date().toISOString().split('T')[0]
    const [date, setDate] = useState('')
    const [record, setRecord] = useState('')
    const [recommendation, setRecommendation] = useState('')
    const AddRecordL = () => {
        addRecord(id_medcard, date, record, recommendation).then(data => onHide());

        setRecommendation('')
        setRecord('')
        setDate('')
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
                                    max={today}
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
                                    placeholder="Введите рекоммендацию..."
                                />
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Отмена</Button>
                {(date&&record&&recommendation)
                    ?
                    <Button variant="primary" onClick={AddRecordL}>Сохранить</Button>
                    :
                    <></>
                }</Modal.Footer>
        </Modal>
    );
};

export default AddRecordModal;




