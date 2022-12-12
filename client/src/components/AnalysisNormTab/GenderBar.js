import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, Row} from "react-bootstrap";

const GenderBar = observer(() => {
    const {analysis} = useContext(Context)
    return (
        <Row >
            {analysis.gender.map(gender =>
                <Card
                    key={gender.id}
                    className="p-2 w-auto m-1"
                    onClick = {() => analysis.setSelectedGender(gender)}
                    border = {gender.id === analysis.selectedGender.id ? 'active': 'light'}
                >
                    {gender.gender}
                </Card>
            )}
            <Card
                key={0}
                className="p-2 w-auto m-1"
                onClick = {() => analysis.setSelectedGender("")}
                border = 'light'
            >
                <i className="fa fa-times m-1" aria-hidden="true"></i>
            </Card>
        </Row>
    );
});

export default GenderBar;