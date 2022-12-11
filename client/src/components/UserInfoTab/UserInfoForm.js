import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Button, Form} from "react-bootstrap";
import BirthdayModal from "./Modals/BirthdayModal";
import GenderModal from "./Modals/GenderModal";
import AddressModal from "./Modals/AddressModal";
import PlaceOfWorkModal from "./Modals/PlaceOfWorkModal";

const UserInfoForm = observer(({user}) => {
    const {analysis} = useContext(Context);
    const [updBirthdayVisible, setBirthdayVisible] = useState(false)
    const [updGenderVisible, setGenderVisible] = useState(false)
    const [updAddressVisible, setAddressVisible] = useState(false)
    const [updPlaceOfWorkVisible, setPlaceOfWorkVisible] = useState(false)
    return (
        <>
            <h1 className="display-5 mb-3">Персональные данные</h1>

            <table className="table" >
                <tbody>
                <tr>
                    <th scope="row" >
                        <label htmlFor="birthday" className="display-6 form-label">дата рождения:</label>
                    </th>
                    <td>
                        <label className="display-6 form-label">{user.birthday}</label>
                    </td>
                    <td>
                        <Button
                            className="btn btn-primary float-end mt-2"
                            onClick={()=> setBirthdayVisible(true)}
                        >Изменить</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="w-50">
                        <label htmlFor="exampleInputGender" className="display-6 form-label">пол:</label>
                    </th>
                    <td>
                        <label className="display-6 form-label">{user.gender}</label>
                    </td>
                    <td>
                        <Button
                            className="btn btn-primary float-end mt-2"
                            onClick={()=> setGenderVisible(true)}
                        >Изменить</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="w-50">
                        <label htmlFor="exampleInputAddress" className="display-6 form-label float-start">адрес:</label>
                    </th>
                    <td>
                        <label className="display-6 form-label">{user.address}</label>
                    </td>
                    <td>
                        <Button
                            className="btn btn-primary float-end mt-2"
                            onClick={()=> setAddressVisible(true)}
                        >Изменить</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label htmlFor="exampleInputWork" className="display-6 form-label">место учёбы/работы:</label>
                    </th>
                    <td>
                        <label className="display-6 form-label">{user.place_of_work}</label>
                        {/*<label className="form-control mt-2" id="exampleInputWork"  >{user.place_of_work}</label>*/}
                    </td>
                    <td>
                        <Button
                            className="btn btn-primary float-end mt-2"
                            onClick={()=> setPlaceOfWorkVisible(true)}
                        >Изменить</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label className="display-6 form-label">медицинская карта:</label>
                    </th>
                    <td>
                        <label className="display-6 form-label">{user.card_number}</label>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label className="display-6 form-label">находится:</label>
                    </th>
                    <td>
                        <label className="display-6 form-label">{user.card_status}</label>
                    </td>
                </tr>
                </tbody>
            </table>
            <BirthdayModal show={updBirthdayVisible} onHide={() => setBirthdayVisible(false)}/>
            <GenderModal show={updGenderVisible} onHide={() => setGenderVisible(false)}/>
            <AddressModal show={updAddressVisible} onHide={() => setAddressVisible(false)}/>
            <PlaceOfWorkModal show={updPlaceOfWorkVisible} onHide={() => setPlaceOfWorkVisible(false)}/>
        </>
    );
});


export default UserInfoForm;