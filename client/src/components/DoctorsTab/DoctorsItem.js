import React from 'react';
import {Card, Col} from "react-bootstrap";
import {PATIENT_TICKET_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";

const DoctorsItem = ({doctor}) => {
    const navigate = useNavigate()
    return (
        <Col className={"mt-3"}>
            <Card border={"active"} onClick={() => navigate(PATIENT_TICKET_ROUTE + "/" + doctor.id)}>
                <h3 className={"mt-2 mx-3"}>{doctor.last_name} {doctor.first_name} {doctor.middle_name}</h3>
                <h5 className={"mt-0 mx-4"}>{doctor.specialization}</h5>
            </Card>
        </Col>
    );
};

export default DoctorsItem;