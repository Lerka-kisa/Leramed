import React, {useContext, useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import AddTimetableModal from "../../components/Timetable/AddTimetableModal";
import {Context} from "../../index";
import {fetchGetCountEmptyTickets, fetchGetCountTickets, fetchShifts} from "../../http/timetableAPI";
import TimetableTable from "../../components/Timetable/TimetableTable";
import AllTicketsTable from "../../components/TalonTab/AllTicketsTable";

const TimeTable = observer(() => {
    const [isShift, setIsShift] = useState(false)
    const [ID, setID] = useState('')
    const {timetable} = useContext(Context)
    const [addTimetableVisible, setAddTimetableVisible] = useState(false)
    useEffect(()=>{
        fetchShifts().then(data => timetable.setShifts(data))
    },[addTimetableVisible])

    const selector = (id) => {
        //.log(id)
        setIsShift(true)
        setID(id)
        //console.log(ID)
    }
    return (
        <Container>
            {(!isShift)
                ?
                <>
                    <Button
                        className="btn btn-primary float-start mt-2 mb-3"
                        onClick={() => setAddTimetableVisible(true)}
                    >Создать расписание</Button>

                    <TimetableTable timetables={timetable} selector={selector} className="mt-5"/>


                    <AddTimetableModal show={addTimetableVisible} onHide={() => setAddTimetableVisible(false)}/>
                </>
                :
                <>
                    <div className="mt-5"></div>
                    <AllTicketsTable className='mt-5' id={ID}/>
                </>
            }
        </Container>
    );
});

export default TimeTable;