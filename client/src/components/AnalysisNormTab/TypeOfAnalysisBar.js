import ListGroup from "react-bootstrap/ListGroup"
import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Button} from "react-bootstrap";

const TypeOfAnalysisBar = observer(() => {
    const {analysis} = useContext(Context)
    return (
        <ListGroup>
            {analysis.types.map(type =>
                <ListGroup.Item
                    active = {type.id === analysis.selectedType.id}
                    onClick = {() => {analysis.setSelectedType(type)}}
                    key={type.id}>
                    {type.name_analysis}
                </ListGroup.Item>
            )}
            <Button className='mt-2' onClick = {() => {analysis.setSelectedType("")}}>Очистить выбор</Button>

        </ListGroup>
    );
});

export default TypeOfAnalysisBar;