import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {updHousecall} from "../../http/housecallAPI";
import Modal from "react-bootstrap/Modal";
import SearchPatientsForm from "../SearchPatientsForm";
import {Table} from "@mui/material";
import {Button, Form} from "react-bootstrap";

const UpdHousecallModal = observer(({show, onHide, element, setElement, setUpdate}) => {
    const [buttonVision,setButtonVision] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setElement({ ...element, [name]: value })
        setButtonVision(true)
    };

    const UpdHouseCallL = () => {
        updHousecall(element.id,element.remark).then(data => onHide())
        setUpdate(true)
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
                <Form>
                    <Table className="table" >
                        <tbody>
                        <tr>
                            <th scope="row">
                                Пациент
                            </th>
                            <td>
                                <Form.Control
                                    value={element.FIO}
                                    readOnly
                                    className="mt-3"
                                    type="text"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Жалобы
                            </th>
                            <td>
                                <Form.Control
                                    name='remark'
                                    value={element.remark}
                                    onChange={handleChange}
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
                <Button variant="secondary" onClick={onHide}>Отмена</Button>
                {(buttonVision)
                    ?
                    <Button variant="primary" onClick={() => UpdHouseCallL()}>Сохранить</Button>
                    :
                    <></>
                }
            </Modal.Footer>
        </Modal>
    );
});

export default UpdHousecallModal;