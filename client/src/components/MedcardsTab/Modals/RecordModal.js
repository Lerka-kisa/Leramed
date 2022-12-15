import React from 'react';
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import {Table} from "@mui/material";

const RecordModal = ({show, onHide, record}) => {

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
                <Table className="table" >
                    <tbody>
                    <tr>
                        <th scope="row">
                            Дата приёма
                        </th>
                        <td>
                            {record.date}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Ход приёма и жалобы пациента
                        </th>
                        <td>
                            {record.record}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Рекомендации по лечению
                        </th>
                        <td>
                            {record.recommendation}
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RecordModal;

