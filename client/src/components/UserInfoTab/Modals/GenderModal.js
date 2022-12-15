import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {Context} from "../../../index";
import {fetchGenders} from "../../../http/analysisAPI";
import {updGender} from "../../../http/userinfoAPI";

const GenderModal = ({show, onHide}) => {
    const {analysis} = useContext(Context);

    useEffect(()=>{
        fetchGenders().then(data => analysis.setGender(data))
    })
    const [gender, setGender] = useState('')
    const updGenderL = () => {
        updGender(gender).then(data => onHide());
        setGender('')
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
                    <Form.Select aria-label="Default select example" onChange={e => setGender(e.target.value)}>
                        <option>Выберите пол</option>
                        {analysis.gender.map(type =>
                            <option value={type.id}>{type.gender}</option>
                        )}
                    </Form.Select>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Отмена
                </Button>
                {(gender)
                    ?
                    <Button variant="primary" onClick={updGenderL}>Сохранить изменения</Button>
                    :
                    <></>
                }
            </Modal.Footer>
        </Modal>
    );
};

export default GenderModal;