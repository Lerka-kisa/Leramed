import React from 'react';
import {observer} from "mobx-react-lite";
import {Button} from "react-bootstrap";
import BirthdayModal from "./Modals/BirthdayModal";
import GenderModal from "./Modals/GenderModal";
import AddressModal from "./Modals/AddressModal";
import PlaceOfWorkModal from "./Modals/PlaceOfWorkModal";

const UserInfoForm = observer(({user, user_data}) => {
    return (
        <>
            <h1 className="h1 mb-3"><u>Персональные данные</u></h1>

            <table className="table" >
                <tbody>
                <tr>
                    <th scope="row" >
                        <label htmlFor="birthday" className="h2 form-label">дата рождения:</label>
                    </th>
                    <td>
                        <label className="h2 fw-normal form-label">{user.birthday}</label>
                    </td>
                    <td>
                        <Button
                            className="btn btn-primary float-end mt-2"
                            onClick={()=> user_data.setBirthdayVisible(true)}
                        >Изменить</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="w-50">
                        <label htmlFor="exampleInputGender" className="h2 form-label">пол:</label>
                    </th>
                    <td>
                        <label className="h2 fw-normal form-label">{user.gender}</label>
                    </td>
                    <td>
                        <Button
                            className="btn btn-primary float-end mt-2"
                            onClick={()=> user_data.setGenderVisible(true)}
                        >Изменить</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="w-50">
                        <label htmlFor="exampleInputAddress" className="h2 form-label float-start">адрес:</label>
                    </th>
                    <td>
                        <label className="h2 fw-normal form-label">{user.address}</label>
                    </td>
                    <td>
                        <Button
                            className="btn btn-primary float-end mt-2"
                            onClick={()=> user_data.setAddressVisible(true)}
                        >Изменить</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label htmlFor="exampleInputWork" className="h2 form-label">место учёбы/работы:</label>
                    </th>
                    <td>
                        <label className="h2 fw-normal form-label">{user.place_of_work}</label>
                    </td>
                    <td>
                        <Button
                            className="btn btn-primary float-end mt-2"
                            onClick={()=> user_data.setPlaceOfWorkVisible(true)}
                        >Изменить</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label className="h2 form-label">медицинская карта:</label>
                    </th>
                    <td>
                        <label className="h2 fw-normal form-label">{user.card_number}</label>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label className="h2 form-label">находится:</label>
                    </th>
                    <td>
                        <label className="h2 fw-normal form-label">{user.card_status}</label>
                    </td>
                </tr>
                </tbody>
            </table>
            <BirthdayModal show={user_data.updBirthdayVisible} onHide={() => user_data.setBirthdayVisible(false)}/>
            <GenderModal show={user_data.updGenderVisible} onHide={() => user_data.setGenderVisible(false)}/>
            <AddressModal show={user_data.updAddressVisible} onHide={() => user_data.setAddressVisible(false)}/>
            <PlaceOfWorkModal show={user_data.updPlaceOfWorkVisible} onHide={() => user_data.setPlaceOfWorkVisible(false)}/>
        </>
    );
});


export default UserInfoForm;