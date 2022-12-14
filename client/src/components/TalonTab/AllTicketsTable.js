import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {
    deleteApplication,
    fetchGetCountEmptyTickets,
    fetchGetCountTickets,
    fetchGetTickets,
    fetchGetTicketsWithData,
} from "../../http/timetableAPI";
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import {cardClasses} from "@mui/material";
const AllTicketsTable = observer(({id}) => {
    const [Update,setUpdate] = useState(false)
    //console.log("ooooooo"+ id)
    // let today  = new Date().toISOString().split('T')[0]
    // const {doctors} = useContext(Context)
    const {timetable} = useContext(Context)
    useEffect(()=>{
        fetchGetTickets(id).then(data => timetable.setAllTickets(data))
        fetchGetTicketsWithData(id).then(data => timetable.setAllTicketsWD(data))
        setUpdate(false)
        // fetchGetCountTickets(id).then(data => timetable.setCountTickets(data))
        //     .catch(e => console.log("говно"))
        // fetchGetCountEmptyTickets(id).then(data => timetable.setCountEmptyTickets(data))
        //     .catch(e => console.log("говно"))
    },[Update])

    const deleteApplicationL = (id) => {
        deleteApplication(id).then(data => setUpdate(true));
    }

    const ConverterTime = (time) => {
        const d = new Date(time) // Parses a ISO 8601 Date
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
                                    <Button>
                                        <i className="fa fa-pencil-square-o align-content-center"></i>
                                    </Button>
                                    <Button onClick={() => deleteApplicationL(tick.id)}>
                                        <i className="fa fa-trash-o align-content-center"></i>
                                    </Button>
                                </td>
                            </>
                            :
                            <>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <Button>
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