import React, {useContext} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import {Table} from "@mui/material";
import {Context} from "../../../index";

const RecordModal = ({show, onHide, role, record}) => {

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

            {(role === "PATIENT")
                ?
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>Закрыть</Button>
                </Modal.Footer>
                :
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>Отмена</Button>
                    <Button variant="primary" onClick={onHide}>Сохранить изменения</Button>
                </Modal.Footer>
            }
        </Modal>
    );
};

export default RecordModal;

