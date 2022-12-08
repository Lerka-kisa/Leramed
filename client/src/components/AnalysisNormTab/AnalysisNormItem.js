import React from 'react';
import {Card, Col} from "react-bootstrap";

const AnalysisNormItem = ({analysisnorm}) => {
    //const history = useHistory()
    return (
        <Col md={4} className={"mt-3"}>
            <Card border={"active"} >
                <h5 className={"m-2"}>Возрастная группа: {analysisnorm.id_agegroup}</h5>
                <h5 className={"m-2"}>Пол: {analysisnorm.id_gender}</h5>
                <h5 className={"m-2"}>Нижний порог: {analysisnorm.min} {analysisnorm.si_unit}</h5>
                <h5 className={"m-2"}>Верхний порог: {analysisnorm.max} {analysisnorm.si_unit}</h5>
            </Card>
        </Col>
    );
};

export default AnalysisNormItem;