import React from 'react';
import {Card, Col} from "react-bootstrap";

const AnalysisNormItem = ({analysisnorm}) => {
    //const history = useHistory()
    return (
        <Col md={4} className={"mt-3"}>
            <Card border={"active"} >
                <h4 className={"m-2 mx-3"}><ins>{analysisnorm.Types_of_analysis.name_analysis}</ins></h4>
                <h5 className={"m-1 mx-3"}>Возрастная группа: {analysisnorm.Age_group.group_name}</h5>
                <h5 className={"m-1 mx-3"}>Пол: {analysisnorm.Gender.gender}</h5>
                <h5 className={"m-1 mx-3"}>Нижний порог: {analysisnorm.min.toFixed(1)} {analysisnorm.SI_unit}</h5>
                <h5 className={"m-1 mx-3 mb-3"}>Верхний порог: {analysisnorm.max.toFixed(1)} {analysisnorm.SI_unit}</h5>
            </Card>
        </Col>
    );
};

export default AnalysisNormItem;