import React, {useContext} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import {Table} from "@mui/material";
import {Context} from "../../../index";

const AnalysisResultModal = ({show, onHide, role, analysis}) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Результат анализа</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table className="table" >
                    <tbody>
                    <tr>
                        <th scope="row">
                            Дата взятия анализа
                        </th>
                        <td>
                            {analysis.date}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Тип анализа
                        </th>
                        <td>
                            {analysis.name_analysis}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Результат анализа
                        </th>
                        <td>
                            {analysis.result}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Относительно нормы
                        </th>
                        <td>
                            {analysis.norm}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Рекомендация врача
                        </th>
                        <td>
                            {analysis.recommendation}
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
            {/*{(role === "PATIENT")*/}
            {/*    ?*/}
            {/*    <Modal.Footer>*/}
            {/*        <Button variant="secondary" onClick={onHide}>Закрыть</Button>*/}
            {/*    </Modal.Footer>*/}
            {/*    :*/}
            {/*    <Modal.Footer>*/}
            {/*        <Button variant="secondary" onClick={onHide}>Отмена</Button>*/}
            {/*        <Button variant="primary" onClick={onHide}>Сохранить изменения</Button>*/}
            {/*    </Modal.Footer>*/}
            {/*}*/}
        </Modal>
    );
};

export default AnalysisResultModal;

