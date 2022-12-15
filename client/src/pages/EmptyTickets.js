import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {
    fetchEmptyTickets,
    setPatientInApp
} from "../http/timetableAPI";
import Table from "react-bootstrap/Table";
import {Button, Container} from "react-bootstrap";
import {useParams} from "react-router-dom";

const EmptyTickets = observer(() => {
    const {id} = useParams()
    const [Update,setUpdate] = useState(false)
    const {timetable} = useContext(Context)
    const {auth} = useContext(Context)
    useEffect(()=>{
        fetchEmptyTickets(id).then(data => timetable.setAllTickets(data))
        setUpdate(false)
    },[Update])
    const setPatientL = (id_app) => {
        setPatientInApp(id_app,auth.id_acc).then(data => setUpdate(true))
    }

    const ConverterTime = (time) => {
        const d = new Date(time)
        if(d.getUTCMinutes()<10)
            return d.getUTCHours() + ':0' + d.getUTCMinutes()
        else
            return d.getUTCHours() + ':' + d.getUTCMinutes()
    }
    return (
        <>
            <Container>
                <Table striped bordered hover size="sm" className="w-50 mt-5">
                    <thead>
                    <tr>
                        <th>Номер талона</th>
                        <th>Дата приёма</th>
                        <th>Время</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {timetable.all_tickets.map(tick =>
                        <tr>
                            <td>{tick.talon_number}</td>
                            <td>{tick.Timetable.date}</td>
                            <td>{ConverterTime(tick.time)}</td>
                            <td>
                                <Button onClick={()=>{setPatientL(tick.id)}}>
                                    <i className="fa fa-pencil-square-o align-content-center"></i>
                                </Button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </Container>
        </>
    );
});

export default EmptyTickets;