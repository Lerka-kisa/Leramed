import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {
    deleteApplication,
    fetchGetTickets,
    fetchGetTicketsWithData,
} from "../../http/timetableAPI";
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
const AllTicketsTable = observer(({id,setIdApp,setAddPatientVisible, addPatientVisible,
                                      setPatient, updPatientVisible, setUpdPatientVisible
                                      ,setAddRecordVisible}) => {
    const {auth} = useContext(Context)
    const [Update,setUpdate] = useState(false)
    const {timetable} = useContext(Context)
    useEffect(()=>{
        fetchGetTickets(id).then(data => timetable.setAllTickets(data))
        fetchGetTicketsWithData(id).then(data => timetable.setAllTicketsWD(data))
        setUpdate(false)
    },[Update,addPatientVisible,updPatientVisible])

    const deleteApplicationL = (id) => {
        deleteApplication(id).then(data => setUpdate(true));
    }

    const ConverterTime = (time) => {
        const d = new Date(time)
        if(d.getUTCMinutes()<10)
            return d.getUTCHours() + ':0' + d.getUTCMinutes()
        else
            return d.getUTCHours() + ':' + d.getUTCMinutes()
    }

    const FindFIO = (id) => {
        let FIO = ''
        timetable.all_ticketsWD.map(tick =>{
                if(tick.id === id){
                    FIO = tick.Patient.last_name + " " + tick.Patient.first_name + " " + tick.Patient.middle_name
                }
            }
        )
        return FIO
    }
    const FindCard = (id) => {
        let card_number = ''
        timetable.all_ticketsWD.map(tick =>{
                if(tick.id === id){
                    card_number = tick.Patient.Medical_card.card_number
                }
            }
        )
        return card_number
    }
    const FindCardStatus = (id) => {
        let card_status = ''
        timetable.all_ticketsWD.map(tick =>{
                if(tick.id === id){
                    card_status = tick.Patient.Medical_card.Card_status.status
                }
            }
        )
        return card_status
    }
    const FindPatient = (id) => {
        let patient = {}
        timetable.all_ticketsWD.map(tick =>{
                if(tick.id === id){
                    patient = tick.Patient
                    patient.card_status = tick.Patient.Medical_card.card_status
                }
            }
        )
        return patient
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Номер талона</th>
                    <th>Время</th>
                    <th>Пациент</th>
                    <th>Медицинская карточка</th>
                    <th>Статус карты</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {timetable.all_tickets.map(tick =>
                    <tr>
                        <td>{tick.talon_number}</td>
                        <td>{ConverterTime(tick.time)}</td>
                        {(tick.id_patient)
                            ?
                            <>
                                <td>{FindFIO(tick.id)}</td>
                                <td>{FindCard(tick.id)}</td>
                                <td>{FindCardStatus(tick.id)}</td>
                                <td>
                                    <Button onClick={()=>{setPatient(FindPatient(tick.id));setIdApp(tick.id); setUpdPatientVisible(true)}}>
                                        <i className="fa fa-cogs align-content-center"></i>
                                    </Button>
                                    <Button onClick={() => deleteApplicationL(tick.id)}>
                                        <i className="fa fa-trash-o align-content-center"></i>
                                    </Button>
                                    {(auth.role==="DOCTOR")
                                        ?
                                        <Button onClick={() => {setPatient(FindPatient(tick.id)); setAddRecordVisible(true)}}>
                                            <i className="fa fa-pencil-square-o align-content-center"></i>
                                        </Button>
                                        :
                                        <></>
                                    }
                                </td>
                            </>
                            :
                            <>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <Button onClick={()=>{setAddPatientVisible(true);setIdApp(tick.id)}}>
                                        <i className="fa fa-plus-square-o align-content-center"></i>
                                    </Button>
                                </td>
                            </>
                        }
                    </tr>
                )}
                </tbody>
            </Table>
        </>
    );
});

export default AllTicketsTable;