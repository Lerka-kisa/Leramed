import ListGroup from "react-bootstrap/ListGroup"
import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const TypeOfAnalysisBar = observer(() => {
    const {analysis} = useContext(Context)

    return (
        <ListGroup>
            {analysis.types.map(type =>
                <ListGroup.Item
                    active = {type.id === analysis.selectedType.id}
                    onClick = {() => analysis.setSelectedType(type)}
                    key={type.id}>
                    {type.name_analysis}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeOfAnalysisBar;