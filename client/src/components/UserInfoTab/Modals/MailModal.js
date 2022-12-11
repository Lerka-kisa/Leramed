import React, {useState} from 'react';
import {updMail} from "../../../http/userinfoAPI";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";

const MailModal =  ({show, onHide}) => {

    const [mail, setMail] = useState('')
    const updMailL = () => {
        //console.log(mail)
        updMail(mail).then(data => onHide());
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
                <Modal.Title>Изменить электронную почту'</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={mail}
                        onChange={e => setMail(e.target.value)}
                        className="mt-3"
                        placeholder="Введите электронную почту..."
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Отмена</Button>
                <Button variant="primary" onClick={updMailL}>Сохранить изменения</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MailModal;