import React from 'react';
import {Card, Col} from "react-bootstrap";

const MyTicketItem = ({ticket}) => {

    const ConverterTime = (time) => {
        const d = new Date(time)
        if(d.getUTCMinutes()<10)
            return d.getUTCHours() + ':0' + d.getUTCMinutes()
        else
            return d.getUTCHours() + ':' + d.getUTCMinutes()
    }
    return (
        <Col md={6} className={"mt-3"}>
            <Card border={"active"} >
                <h5 className={"m-2 mx-3"}><ins>Талон №{ticket.talon_number}</ins></h5>
                <h6 className={"m-1 mx-3"}>Дата приёма: {ticket.Timetable.date}</h6>
                <h6 className={"m-1 mx-3"}>Время приёма: {ConverterTime(ticket.time)}</h6>
                <h6 className={"m-1 mx-3"}>Врач: {ticket.Timetable.Doctor.specialization}</h6>
                <h6 className={"m-1 mx-3 mb-3"}>{ticket.Timetable.Doctor.last_name} {ticket.Timetable.Doctor.first_name} {ticket.Timetable.Doctor.middle_name}</h6>
            </Card>
        </Col>
    );
};

export default MyTicketItem;