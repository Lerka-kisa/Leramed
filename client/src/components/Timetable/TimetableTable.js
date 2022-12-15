import React, {useContext} from 'react';
import Table from 'react-bootstrap/Table';
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {ADMIN_TIMETABLE_ROUTE, DOCTOR_TIMETABLE_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
const TimetableTable = observer(({timetables}) => {
    const {auth} = useContext(Context)
    const navigate = useNavigate()
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Дата приёма</th>
                    <th>Смена</th>
                    {(auth.role==="ADMIN")
                        ?
                        <>
                            <th>Врач</th>
                            <th>Специализация</th>
                        </>
                        :
                        <></>
                    }</tr>
                </thead>
                <tbody>
                {timetables.shifts.map(shift =>
                    <>
                        {(auth.role === 'ADMIN')
                            ?
                            <tr onClick={() => navigate(ADMIN_TIMETABLE_ROUTE + "/" + shift.id)}>
                                <td>{shift.date}</td>
                                <td>{shift.Types_of_shift.period_name}</td>
                                <td>{shift.Doctor.last_name} {shift.Doctor.first_name} {shift.Doctor.middle_name} </td>
                                <td>{shift.Doctor.specialization}</td>
                            </tr>
                            :
                            <tr onClick={() => navigate(DOCTOR_TIMETABLE_ROUTE + "/" + shift.id)}>
                                <td>{shift.date}</td>
                                <td>{shift.Types_of_shift.period_name}</td>
                            </tr>
                        }
                    </>
                )}
                </tbody>
            </Table>
        </>
    );
});

export default TimetableTable;