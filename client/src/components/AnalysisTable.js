import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import RecordModal from "./MedcardsTab/Modals/RecordModal";
import {toJS} from "mobx";
import AnalysisResultModal from "./MedcardsTab/Modals/AnalysisResultModal";
const AnalysisTable = ({analysis, auth}) => {
    const [resultVisible, setResultVisible] = useState(false)
    const [obj, setObj] = useState(false)
    console.log(toJS(analysis))
    const getResult = (obj) => {
        setResultVisible(true)
        setObj(obj)
        console.log(obj)
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Дата анализа</th>
                    <th>Анализ</th>
                    <th>Результат</th>
                    <th>Оценка</th>
                    <th>Рекомендации</th>
                </tr>
                </thead>
                <tbody>
                {analysis.map(anal =>
                    <>
                        <tr onClick={() => getResult(anal)}>
                            <td>{anal.date}</td>
                            <td>{anal.name_analysis}</td>
                            <td>{anal.result}</td>
                            <td>{anal.norm}</td>
                            <td>{anal.recommendation}</td>
                        </tr>
                    </>
                )}
                </tbody>
            </Table>
            <AnalysisResultModal
                role={auth.role}
                show={resultVisible}
                analysis = {obj}
                onHide={() => setResultVisible(false)}
            />

        </>
    );
};

export default AnalysisTable;