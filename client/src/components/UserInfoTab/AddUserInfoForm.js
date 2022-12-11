import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchAgegroups, fetchGenders} from "../../http/analysisAPI";
import {Button, Form, FormSelect} from "react-bootstrap";
import {Table, Tbody, Th, Thead, Tr, Td} from "react-super-responsive-table";
import {updInfo} from "../../http/userinfoAPI";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup, FormHelperText,
    FormLabel,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";

const UserInfoForm = observer(({user}) => {
    const {analysis} = useContext(Context);
    const [birthday, setBirthday] = useState('')
    const [flat, setFlat] = useState('')

    const newD = async () => {
        //console.log(birthday)
        let data = await updInfo(birthday)
        // const lol = document.getElementById("flat").value;
        // console.log(lol)
    }
    useEffect(()=>{
        fetchGenders().then(data => analysis.setGender(data))
        fetchAgegroups().then(data => analysis.setAgegroup(data))
    },[])
    return (
        <Form>
            <h1 className="display-5 mb-3">Персональные данные</h1>

            <Table className="table" >
                <Tbody>
                    <Tr>
                        <Th scope="row" className="w-50">
                            <label htmlFor="birthday" className="display-6 form-label">дата рождения:</label>
                        </Th>
                        <Td>
                            <Form.Control
                                type="text"
                                className="form-control"
                                placeholder={user.birthday}
                                value={birthday}
                                onChange={e => setBirthday(e.target.value)}
                            />
                        </Td>
                    </Tr>
                    <Tr>
                        <Th scope="row" className="w-50">
                            <label htmlFor="exampleInputGender" className="display-6 form-label">пол:</label>
                        </Th>
                        <Td>
                            <FormSelect className="form-select" aria-label="Default select example">
                                <option selected>{user.gender}</option>
                                {analysis.gender.map(gender =>
                                    (gender.gender !== user.gender)
                                        ?<option value={gender.id}>{gender.gender}</option>
                                        :<></>
                                )}
                            </FormSelect>
                        </Td>
                    </Tr>
                    <Tr>
                        <Th scope="row" className="w-50">
                            <label htmlFor="exampleInputAddress" className="display-6 form-label float-start">адрес:</label>
                        </Th>
                        <Td>
                            <Table>
                                <Tr>
                                    <Th>
                                        <label htmlFor="city" className="display-6 form-label">г.</label>
                                    </Th>
                                    <Td>
                                        <input type="text" className="form-control mt-2" id="city" placeholder={user.city}/>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Th>
                                        <label htmlFor="exampleInputStreet" className="display-6 form-label">ул.</label>
                                    </Th>
                                    <Td>
                                        <input type="text" className="form-control float-end mt-2" id="exampleInputStreet" placeholder={user.street}/>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Th>
                                        <label htmlFor="exampleInputHouse" className=" display-6 form-label">д.</label>
                                    </Th>
                                    <Td>
                                        <input type="text" className="form-control float-end mt-2" id="exampleInputHouse" placeholder={user.house}/>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Th>
                                        <label htmlFor="flat" className="display-6 form-label float-start">кв.</label>
                                    </Th>
                                    <Td>
                                        <input type="text" className="form-control float-end mt-2" id="flat" placeholder={user.flat}/>
                                    </Td>
                                </Tr>
                            </Table>
                        </Td>

                    </Tr>
                    <Tr>
                        <Th scope="row">
                            <InputLabel htmlFor="exampleInputWork" className="display-6 form-label">место учёбы/работы:</InputLabel>
                        </Th>
                        <Td>
                            <input type="text"  className="form-control mt-2" id="exampleInputWork"  placeholder={user.place_of_work}/>
                        </Td>
                    </Tr>
                    <Tr>
                        <Th scope="row">
                            <InputLabel className="display-6 form-label">медицинская карта:</InputLabel>
                            <input value={user.card_number} readOnly className="display-6 form-label"/>
                        </Th>
                    </Tr>
                    <Tr>
                    <Th scope="row">
                        <label className="display-6 form-label">находится:</label>
                    </Th>
                    <Td>
                        <label className="display-6 form-label">{user.card_status}</label>
                    </Td>
                </Tr>
            </Tbody>
        </Table>
    <Button type="submit" className="btn btn-primary float-end" onClick={newD()}>Submit</Button>
</Form>
);
});


export default UserInfoForm;