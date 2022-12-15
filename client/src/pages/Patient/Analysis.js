import React, {useContext, useEffect} from 'react';
import {Context} from "../../index";
import {fetchGetinfo} from "../../http/userinfoAPI";
import {Container} from "react-bootstrap";
import {fetchGetAnalysis} from "../../http/analysisAPI";
import {observer} from "mobx-react-lite";
import AnalysisTable from "../../components/AnalysisTable";

const Analysis = observer(() => {
    const {auth} = useContext(Context)
    const {analysis} = useContext(Context)
    const {userinfo} = useContext(Context)
    useEffect(()=>{
        fetchGetinfo().then(data => {
            userinfo.setUserinfo(data)
        })
    },[])
    useEffect(()=>{
        fetchGetAnalysis().then(data => {
            analysis.setAnalysis(data)
        })
    },[])

    return (
        <Container>
            <h1 className="display-5 mt-5 mb-4">Для более точных рекомендаций придите на приём</h1>
            <AnalysisTable analysis={analysis.analysis} className="mt-3" auth ={auth}/>
        </Container>
    );
});

export default Analysis;