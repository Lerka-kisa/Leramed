import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, FloatingLabel, Form, FormSelect, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {Context} from "../../index";
import {fetchGenders} from "../../http/analysisAPI";
import {observer} from "mobx-react-lite";
import {AddUserinfo} from "../../http/userinfoAPI";
import {PATIENT_INFO_ROUTE} from "../../utils/consts";

const AddInfo = observer(() => {
    const {auth} = useContext(Context)
    const {analysis} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()

    const [last_name, setLastName] = useState('')
    const [first_name, setFirstName] = useState('')
    const [middle_name, setMiddleName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [place_of_work, setPlaceOfWork] = useState('')
    let today  = new Date().toISOString().split('T')[0]

    useEffect(()=>{
        fetchGenders().then(data => analysis.setGender(data))
    },[])

    function get_current_age(date) {
        return ((new Date() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
    }
    const click = async () => {
        const age = get_current_age(birthday);
        auth.check()
        AddUserinfo(last_name, first_name, middle_name, birthday, gender, address, place_of_work, age)
            .then(()=>{
                navigate(PATIENT_INFO_ROUTE)
            })
            .catch(()=>{
                alert("сука!!!!")
            })
    }
    return (
        <Container>
            <h1 className="display-5 mb-3">Для дальнейшей работы введите свои данные пожалуйста</h1>
            <Form>
                <div className="row mt-3">
                    <div className="col">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Фамилия"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                className="form-control"
                                placeholder="Иванов"
                                value={last_name}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </FloatingLabel>
                    </div>
                    <div className="col">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Имя"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                className="form-control"
                                placeholder="Иван"
                                value={first_name}
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </FloatingLabel>
                    </div>
                    <div className="col">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Отчество"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                className="form-control"
                                placeholder="Иванович"
                                value={middle_name}
                                onChange={e => setMiddleName(e.target.value)}
                            />
                        </FloatingLabel>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Дата рождения"
                            className="mb-3"
                        >
                            <Form.Control
                                type="date"
                                className="form-control"
                                max={today}
                                value={birthday}
                                onChange={e => setBirthday(e.target.value)}
                            />
                        </FloatingLabel>
                    </div>
                    <div className="col">
                        <Form.Select aria-label="Default select example" onChange={e => setGender(e.target.value)}>
                            <option>Выберите пол</option>
                            {analysis.gender.map(type =>
                                <option value={type.id}>{type.gender}</option>
                            )}
                        </Form.Select>
                    </div>
                </div>
                <div className="col mt-3">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Адрес"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            className="form-control"
                            placeholder="г.Заславль, ул.Студенецкая, д.6"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                    </FloatingLabel>
                </div>
                <div className="col mt-3">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Место работы/учёбы, должность(класс/курс)"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            className="form-control"
                            placeholder="г.Заславль, ул.Студенецкая, д.6"
                            value={place_of_work}
                            onChange={e => setPlaceOfWork(e.target.value)}
                        />
                    </FloatingLabel>
                </div>
            </Form>
            <Button variant="primary" className="mt-3" onClick={click}>Сохранить</Button>
        </Container>
    );
});

export default AddInfo;