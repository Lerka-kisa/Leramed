import React, {useContext, useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {delHousecall, fetchAll} from "../../http/housecallAPI";
import {Button} from "react-bootstrap";
import UpdHousecallModal from "./UpdHousecallModal";
const HousecallsAdminTable = observer(({addHouseCallVisible}) => {
    const {housecall} = useContext(Context)
    const [update,setUpdate] = useState('')
    const [element,setElement] = useState('')
    const [updHouseCallVisible, setUpdHouseCallVisible] = useState(false)
    useEffect(()=>{
        fetchAll().then(data => housecall.setHousecall(data))
        setUpdate(false)
    },[addHouseCallVisible,update])

    const delHouseCallL = (id) => {
        delHousecall(id).then(data => {})
        setUpdate(true)
    }

    const getFIO = (element) => {
        const FIO = element.Patient.last_name + " " + element.Patient.first_name + " " + element.Patient.middle_name
        element.FIO = FIO
        return element
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Пациент</th>
                    <th>Жалоба</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {housecall.housecall.map(housecall =>
                    <>
                        <tr>
                            <td>{housecall.Patient.last_name} {housecall.Patient.first_name} {housecall.Patient.middle_name}</td>
                            <td>{housecall.remark}</td>
                            <td>
                                <Button onClick={()=>{setUpdHouseCallVisible(true); setElement(getFIO(housecall))}}>
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

            <UpdHousecallModal show={updHouseCallVisible} setElement={setElement} setUpdate={setUpdate}
                               onHide={() => setUpdHouseCallVisible(false)} element={element}/>
        </>
    );
});

export default HousecallsAdminTable;