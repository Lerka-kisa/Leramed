import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import DoctorsList from "../components/DoctorsTab/DoctorsList";
import {Context} from "../index";
import {fetchDoctors} from "../http/doctorsAPI";

const Tickets = observer(() => {
    const {doctors} = useContext(Context)
    useEffect(()=>{
        fetchDoctors().then(data => doctors.setDoctor(data))
        console.log(doctors.doctor)
    })

    return (
        <Container>
            <Row className="mt-4">
                <Col md={7}>
                    <DoctorsList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Tickets;