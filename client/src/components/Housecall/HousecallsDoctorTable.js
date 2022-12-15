import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {delHousecall, fetchAll} from "../../http/housecallAPI";
import Table from "react-bootstrap/Table";
import {Button} from "react-bootstrap";
import AddRecordModal from "../MedcardsTab/Modals/AddRecordModal";

const HousecallsDoctorTable = observer(({addHouseCallVisible}) => {
    const {housecall} = useContext(Context)
    const [update,setUpdate] = useState('')
    const [id_medcard,setIdMedcard] = useState('')
    const [addRecordVisible, setAddRecordVisible] = useState(false)
    useEffect(()=>{
        fetchAll().then(data => housecall.setHousecall(data))
        setUpdate(false)
    },[addHouseCallVisible,update])

    const delHouseCallL = (id) => {
        delHousecall(id).then(data => {})
        setUpdate(true)
    }

    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Пациент</th>
                    <th>Адрес</th>
                    <th>Телефон</th>
                    <th>Жалоба</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {housecall.housecall.map(housecall =>
                    <>
                        <tr>
                            <td>{housecall.Patient.last_name} {housecall.Patient.first_name} {housecall.Patient.middle_name}</td>
                            <td>{housecall.Patient.address}</td>
                            <td>{housecall.Patient.Authorization_info.phone}</td>
                            <td>{housecall.remark}</td>
                            <td>
                                <Button onClick={()=>{setAddRecordVisible(true); setIdMedcard(housecall.Patient.id_medcard)}}>
                                    <i className="fa fa-pencil-square-o align-content-center"></i>
                                </Button>
                                <Button onClick={() => {delHouseCallL(housecall.id)}}>
                                    <i className="fa fa-trash-o align-content-center"></i>
                                </Button>
                            </td>
                        </tr>
                    </>
                )}
                </tbody>
            </Table>
            <AddRecordModal id_medcard={id_medcard} show={addRecordVisible} onHide={() => setAddRecordVisible(false)}/>
        </>
    );
});

export default HousecallsDoctorTable;