import React, {useContext, useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import AddTimetableModal from "../../components/Timetable/AddTimetableModal";
import {Context} from "../../index";
import {fetchShifts} from "../../http/timetableAPI";
import TimetableTable from "../../components/Timetable/TimetableTable";

const TimeTable = observer(() => {
    const {auth} = useContext(Context)
    const {timetable} = useContext(Context)
    const [addTimetableVisible, setAddTimetableVisible] = useState(false)
    useEffect(()=>{
        fetchShifts().then(data => timetable.setShifts(data))
    },[addTimetableVisible])

    return (
        <Container>
            {(auth.role==="ADMIN")
                ?
                <Button
                    className="btn btn-primary float-start mt-2 mb-3"
                    onClick={() => setAddTimetableVisible(true)}
                >Создать расписание</Button>
                :
                <div className="mb-3"></div>
            }

            <TimetableTable timetables={timetable} className="mt-5"/>

            <AddTimetableModal show={addTimetableVisible} onHide={() => setAddTimetableVisible(false)}/>
        </Container>
    );
});

export default TimeTable;