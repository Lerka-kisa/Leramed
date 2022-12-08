import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import AnalysisNormItem from "./AnalysisNormItem";

const AnalysisNormList = observer(() => {
    const {analysis} = useContext(Context)
    return (
        <Row className="d-flex">
            {analysis.analysisnorm.map(analysisnorm =>
                <AnalysisNormItem key={analysisnorm.id} analysisnorm = {analysisnorm}/>
            )}
        </Row>
    );
});

export default AnalysisNormList;