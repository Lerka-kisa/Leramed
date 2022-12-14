import React, {useState} from 'react';
import {updPhone} from "../../../http/userinfoAPI";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";

const PhoneModal =  ({show, onHide}) => {

    const [phone, setPhone] = useState('')
    const updPhoneL = () => {
        updPhone(phone).then(data => onHide());
        setPhone('')
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Изменить номер телефона</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="mt-3"
                        placeholder="Введите номер телефон..."
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Отмена</Button>
                <Button variant="primary" onClick={updPhoneL}>Сохранить изменения</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PhoneModal;