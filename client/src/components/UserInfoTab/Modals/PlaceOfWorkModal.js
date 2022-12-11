import React, {useState} from 'react';
//import {Modals} from "@mui/material";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {updPlaceOfWork} from "../../../http/userinfoAPI";

const PlaceOfWorkModal = ({show, onHide}) => {

    const [place, setPlace] = useState('')
    const updPlace = () => {
        console.log(place)
        updPlaceOfWork(place).then(data => onHide());
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
                <Modal.Title>Изменить место работы/обучения</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={place}
                        onChange={e => setPlace(e.target.value)}
                        className="mt-3"
                        placeholder="Введите место работы/обучения..."
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Отмена</Button>
                <Button variant="primary" onClick={updPlace}>Сохранить изменения</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PlaceOfWorkModal;