import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeOfAnalysisBar from "../../components/AnalysisNormTab/TypeOfAnalysisBar";
import GenderBar from "../../components/AnalysisNormTab/GenderBar";
import AgegroupeBar from "../../components/AnalysisNormTab/AgegroupeBar";
import AnalysisNormList from "../../components/AnalysisNormTab/AnalysisNormList";
import {Context} from "../../index";
import {fetchAgegroups, fetchAnalysisNorms, fetchGenders, fetchTypes} from "../../http/analysisAPI";

const AnalysisNorms = () => {
    const {analysis} = useContext(Context);
    const someContext = useContext(Context);

    useEffect(()=>{
        fetchTypes().then(data => analysis.setTypes(data))
        fetchGenders().then(data => analysis.setGender(data))
        fetchAgegroups().then(data => analysis.setAgegroup(data))
    })
    useEffect(()=>{
        fetchAnalysisNorms(analysis.selectedType.id).then(data => analysis.setAnalysisnorm(data))
    },[someContext.analysis])

    return (
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    <TypeOfAnalysisBar/>
                </Col>
                <Col md={9}>
                    <GenderBar/>
                    <AgegroupeBar/>
                    <AnalysisNormList/>
                </Col>
            </Row>
        </Container>
    );
};

export default AnalysisNorms;