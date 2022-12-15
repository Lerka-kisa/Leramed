import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Container} from "react-bootstrap";
import AddHousecallModal from "../components/Housecall/AddHousecallModal";
import HousecallsAdminTable from "../components/Housecall/HousecallsAdminTable";
import HousecallsDoctorTable from "../components/Housecall/HousecallsDoctorTable";

const HouseCalls = observer(() => {
    const {auth} = useContext(Context)
    const [addHouseCallVisible, setAddHouseCallVisible] = useState(false)

    return (
        <Container>
            {(auth.role === 'DOCTOR')
                ?
                <>
                    <div className="m-4"></div>

                    <HousecallsDoctorTable addHouseCallVisible={addHouseCallVisible}/>
                </>
                :
                <>
                    <Button
                        className="btn btn-primary float-start mt-4 mb-4"
                        onClick={() => setAddHouseCallVisible(true)}
                    >Добавить вызов</Button>

                    <HousecallsAdminTable addHouseCallVisible={addHouseCallVisible}/>
                </>

            }

            <AddHousecallModal show={addHouseCallVisible} onHide={() => setAddHouseCallVisible(false)}/>
        </Container>
    );
});

export default HouseCalls;