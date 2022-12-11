import React, {useState} from 'react';
import {updLogin} from "../../../http/userinfoAPI";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";

const LoginModal =  ({show, onHide}) => {

    const [login, setLogin] = useState('')
    const updLoginL = () => {
        console.log(login)
        updLogin(login).then(data => onHide());
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
                <Modal.Title>Изменить логин</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        className="mt-3"
                        placeholder="Введите логин..."
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Отмена</Button>
                <Button variant="primary" onClick={updLoginL}>Сохранить изменения</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default LoginModal;