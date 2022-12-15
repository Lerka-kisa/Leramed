import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {Table} from "@mui/material";
import {Context} from "../../../src/index";
import {addTimetable, fetchTypesOfShifts} from "../../http/timetableAPI";
import {fetchDoctors} from "../../http/doctorsAPI";

const AddTimetableModal = ({show, onHide}) => {
    let today  = new Date().toISOString().split('T')[0]
    const {doctors} = useContext(Context)
    const {timetable} = useContext(Context)

    const [date, setDate] = useState(today)
    const [id_type, setType] = useState(1)
    const [id_doctor, setDoctor] = useState(1)

    useEffect(()=>{
        fetchTypesOfShifts().then(data => timetable.setTypesOfShifts(data))
        fetchDoctors().then(data => doctors.setDoctor(data))
    })
    const addTimetableL = () => {
        addTimetable(date, id_type, id_doctor).then(data => onHide());
        setDate(today)
        setType(1)
        setDoctor(1)
    }
    return (
        <Modal
            show={show} onHide={onHide} size="lg" centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Создание приёма</Modal.Title>
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
                                    min={today}
                                    onChange={e => setDate(e.target.value)}
                                    className="mt-3"
                                    type="date"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Смена
                            </th>
                            <td>
                                <Form.Select aria-label="Default select example" onChange={e => setType(e.target.value)}>
                                    {timetable.shifts_types.map(type =>
                                        <option value={type.id}>{type.period_name}</option>
                                    )}
                                </Form.Select>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Врач
                            </th>
                            <td>
                                <Form.Select aria-label="Default select example" onChange={e => setDoctor(e.target.value)}>
                                    {doctors.doctor.map(doctor =>
                                        <option value={doctor.id}>{doctor.last_name} {doctor.first_name} {doctor.middle_name}</option>
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
                {(date&&id_type&&id_doctor)
                    ?
                    <Button variant="primary" onClick={addTimetableL}>Сохранить</Button>
                    :
                    <></>
                }
            </Modal.Footer>
        </Modal>
    );
};
export default AddTimetableModal;




