import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchGetinfo} from "../../http/userinfoAPI";
import {fetchGetMedcard} from "../../http/medcardsAPI";
import {Col, Container, Row} from "react-bootstrap";
import MedicalRecordsTable from "../../components/MedicalRecordsTable";
import {fetchAgegroups, fetchAnalysisNorms, fetchGenders, fetchTypes} from "../../http/analysisAPI";
import TypeOfAnalysisBar from "../../components/AnalysisNormTab/TypeOfAnalysisBar";
import GenderBar from "../../components/AnalysisNormTab/GenderBar";
import AgegroupeBar from "../../components/AnalysisNormTab/AgegroupeBar";
import AnalysisNormList from "../../components/AnalysisNormTab/AnalysisNormList";
import {fetchMyTickets} from "../../http/timetableAPI";
import MyTicketsList from "../../components/MyTicketsList";

const MyTickets = observer(() => {
    const {timetable} = useContext(Context);
    useEffect(()=>{
        fetchMyTickets().then(data => timetable.setAllTickets(data))
    },[])

    return (
        <Container>
            <Row className="mt-4">
                <Col md={9}>
                    <MyTicketsList/>
                </Col>
            </Row>
        </Container>
    );
});

export default MyTickets;