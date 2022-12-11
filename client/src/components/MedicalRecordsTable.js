import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import RecordModal from "./MedcardsTab/Modals/RecordModal";
const MedicalRecordsTable = ({records, auth}) => {
    const [recordVisible, setRecordVisible] = useState(false)
    const [obj, setObj] = useState(false)
    const getRecord = (obj) => {
        setRecordVisible(true)
        setObj(obj)
        console.log(obj)
    }
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Дата записи</th>
                    <th>Ход приёма, жалобы пациента</th>
                    <th>Рекомендация к лечению</th>
                </tr>
                </thead>
                <tbody>
                {records.map(record =>
                    <>
                        <tr onClick={() => getRecord(record)}>
                            <td>{record.date}</td>
                            <td>{record.record}</td>
                            <td>{record.recommendation}</td>
                        </tr>

                    </>
                )}
                </tbody>
            </Table>
            <RecordModal
                role={auth.role}
                show={recordVisible}
                record = {obj}
                onHide={() => setRecordVisible(false)}
            />
        </>
    );
};

export default MedicalRecordsTable;