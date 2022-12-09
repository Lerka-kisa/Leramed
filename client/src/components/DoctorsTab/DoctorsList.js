import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import DoctorsItem from "./DoctorsItem";

const DoctorsList = observer(() => {
    const {doctors} = useContext(Context)
    return (
        <Row className="d-flex flex-column">
            {doctors.doctor.map(doc =>
                <DoctorsItem key={doc.id} doctor = {doc}/>
            )}
        </Row>
    );
});

export default DoctorsList;