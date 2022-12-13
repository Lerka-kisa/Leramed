import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {Table} from "@mui/material";
import {Context} from "../../../index";
import {addRecord} from "../../../http/medcardsAPI";
import {addResult, fetchTypes} from "../../../http/analysisAPI";

const AddAnalysisResultModal = ({show, onHide, id_medcard}) => {
    let today  = new Date().toISOString().split('T')[0]
    const {analysis} = useContext(Context)
    const [date, setDate] = useState('')
    const [result, setResult] = useState('')
    const [recommendation, setRecommendation] = useState('')
    const [analysis_type, setAnalysisType] = useState('')

    useEffect(()=>{
        fetchTypes().then(data => analysis.setTypes(data))
    })
    const addResultL = () => {
        addResult(id_medcard, date, analysis_type, result, recommendation).then(data => onHide());
        setDate('')
        setResult('')
        setRecommendation('')
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Результаты анализа</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Table className="table" >
                        <tbody>
                        <tr>
                            <th scope="row">
                                Дата взятия анализа
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
                                Тип анализа
                            </th>
                            <td>
                                <Form.Select aria-label="Default select example" onChange={e => setAnalysisType(e.target.value)}>
                                    <option>Выберите тип анализа</option>
                                    {analysis.types.map(type =>
                                        <option value={type.id}>{type.name_analysis}</option>
                                    )}
                                </Form.Select>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Результат
                            </th>
                            <td>
                                <Form.Control
                                    value={result}
                                    onChange={e => setResult(e.target.value)}
                                    className="mt-3"
                                    placeholder="Результаты..."
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Рекомендация врача
                            </th>
                            <td>
                                <Form.Control
                                    value={recommendation}
                                    onChange={e => setRecommendation(e.target.value)}
                                    className="mt-3"
                                    placeholder="Введите реккомендацию..."
                                />
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Отмена</Button>
                <Button variant="primary" onClick={addResultL}>Сохранить</Button>
            </Modal.Footer>

        </Modal>
    );
};

export default AddAnalysisResultModal;




