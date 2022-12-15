import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import MyTicketItem from "./MyTicketItem";

const MyTicketsList = observer(() => {
    const {timetable} = useContext(Context)
    console.log(timetable.all_tickets)
    return (
        <Row className="d-flex">
            {timetable.all_tickets.map(ticket =>
                <MyTicketItem key={ticket.id} ticket = {ticket}/>
            )}
        </Row>
    );
});

export default MyTicketsList;