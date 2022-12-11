import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form} from "react-bootstrap";
import {Context} from "../../../index";
import {fetchGenders} from "../../../http/analysisAPI";
import {MenuItem, Select} from "@mui/material";
import {updBirthday, updGender} from "../../../http/userinfoAPI";

const GenderModal = ({show, onHide}) => {
    const {analysis} = useContext(Context);

    useEffect(()=>{
        fetchGenders().then(data => analysis.setGender(data))
    })
    const [gender, setGender] = useState('')
    const updGenderL = () => {
        //console.log(gender)
        updGender(gender).then(data => onHide());
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
                <Modal.Title>Изменить пол</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{analysis.selectedGender.gender || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {analysis.gender.map(type =>
                                <Dropdown.Item
                                    onClick={() => setGender(type.id)}
                                    key={type.id}
                                >
                                    {type.gender}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Отмена
                </Button>
                <Button variant="primary" onClick={updGenderL}>Сохранить изменения</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default GenderModal;