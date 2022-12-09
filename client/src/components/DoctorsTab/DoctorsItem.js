import React from 'react';
import {Card, Col} from "react-bootstrap";

const DoctorsItem = ({doctor}) => {
    return (
        <Col className={"mt-3"}>
            <Card border={"active"} >
                <h3 className={"mt-2 mx-3"}>{doctor.last_name} {doctor.first_name} {doctor.middle_name}</h3>
                <h5 className={"mt-0 mx-4"}>{doctor.specialization}</h5>
            </Card>
        </Col>
    );
};

export default DoctorsItem;