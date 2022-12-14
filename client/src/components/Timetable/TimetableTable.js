import React from 'react';
import Table from 'react-bootstrap/Table';
import {observer} from "mobx-react-lite";
const TimetableTable = observer(({timetables, selector}) => {
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Дата приёма</th>
                    <th>Смена</th>
                    <th>Врач</th>
                    <th>Специализация</th>
                </tr>
                </thead>
                <tbody>
                {timetables.shifts.map(shift =>
                    <>
                        <tr onClick={() => {selector(shift.id)}}>
                            <td>{shift.date}</td>
                            <td>{shift.Types_of_shift.period_name}</td>
                            <td>{shift.Doctor.last_name} {shift.Doctor.first_name} {shift.Doctor.middle_name} </td>
                            <td>{shift.Doctor.specialization}</td>
                        </tr>
                    </>
                )}
                </tbody>
            </Table>
        </>
    );
});

export default TimetableTable;