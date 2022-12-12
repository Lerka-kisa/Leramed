import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, Row} from "react-bootstrap";

const AgegroupeBar = observer(() => {
    const {analysis} = useContext(Context)
    return (
        <Row>
            {analysis.agegroup.map(agegroup =>
                <Card
                    key={agegroup.id}
                    className="p-2 w-auto m-1"
                    onClick = {() => analysis.setSelectedAgegroup(agegroup)}
                    border = {agegroup.id === analysis.selectedAgegroup.id ? 'active': 'light'}
                >
                    {agegroup.group_name}
                </Card>
            )}
            <Card
                key={0}
                className="p-2 w-auto m-1"
                onClick = {() => analysis.setSelectedAgegroup("")}
                border = 'light'
            >
                <i className="fa fa-times m-1" aria-hidden="true"></i>
            </Card>
        </Row>
    );
});

export default AgegroupeBar;