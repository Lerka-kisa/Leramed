import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {updAddress} from "../../../http/userinfoAPI";

const AddressModal = ({show, onHide}) => {
    const [address, setAddress] = useState('')
    const updAddressL = () => {
        updAddress(address).then(data => onHide());
        setAddress('')
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Изменить адрес</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ваш адрес..."
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Отмена</Button>
                {(address)
                    ?
                    <Button variant="primary" onClick={updAddressL}>Сохранить изменения</Button>
                    :
                    <></>
                }
            </Modal.Footer>
        </Modal>
    );
};

export default AddressModal;