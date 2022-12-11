import React, {useState} from 'react';
//import {Modals} from "@mui/material";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {updBirthday} from "../../../http/userinfoAPI";

const BirthdayModal = ({show, onHide}) => {
    const [birthday, setBirthday] = useState('')
    const updDate = () => {
        console.log(birthday)
        updBirthday(birthday).then(data => onHide());
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Изменить дату рождения</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        type = "date"
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)}
                        className="mt-3"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Отмена
                </Button>
                <Button variant="primary" onClick={updDate}>Сохранить изменения</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BirthdayModal;