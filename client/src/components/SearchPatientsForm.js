import React, {useContext, useEffect, useState} from 'react';
import {Form, InputGroup} from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import {fetchGetPatients} from "../http/doctorsAPI";

const SearchPatientsForm = ({doctors}) => {

    const [type, setType] = useState(doctors.searchtypes[0])
    const [search, setSearch] = useState('')
    const [searchName, setSearchName] = useState('')
    const [searchSurname, setSearchSurname] = useState('')
    const [searchMiddle, setSearchMiddle] = useState('')
    useEffect(()=>{
        fetchGetPatients(type.id, search, searchName, searchSurname, searchMiddle)
            .then(data => doctors.setPatients(data))
    }, [search, searchName, searchSurname, searchMiddle])

    function selector(type) {
        setType(type)
        setSearch('')
        setSearchName('')
        setSearchMiddle('')
        setSearchSurname('')
    }
    return (
        <div className="input-group rounded mt-2 mb-3">
            <Form>
                <InputGroup className="mb-3 w-100">
                    <DropdownButton
                        variant="outline-secondary"
                        title={type.type}
                        id="input-group-dropdown-1"
                    >
                        {doctors.searchtypes.map(types =>
                            <Dropdown.Item
                                onClick={() => selector(types)}
                                key={types.id}
                            >
                                {types.type}
                            </Dropdown.Item>
                        )}
                    </DropdownButton>
                    {(type.column === "FIO")
                        ?
                        <>
                            <Form.Control
                                value={searchSurname}
                                onChange={e => setSearchSurname(e.target.value)}
                                className="form-control rounded"
                                placeholder="Фамилия"
                            />
                            <Form.Control
                                value={searchName}
                                onChange={e => setSearchName(e.target.value)}
                                className="form-control rounded"
                                placeholder="Имя"
                            />
                            <Form.Control
                                value={searchMiddle}
                                onChange={e => setSearchMiddle(e.target.value)}
                                className="form-control rounded"
                                placeholder="Отчество"
                            />
                        </>
                        :
                        <Form.Control
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="form-control rounded"
                            placeholder="Поиск..."
                        />
                    }
                    <span className="input-group-text border-0" id="search-addon">
                            <i className="fas fa-search"></i>
                        </span>
                </InputGroup>
            </Form>
        </div>
    );
};

export default SearchPatientsForm;