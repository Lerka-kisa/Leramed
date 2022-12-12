import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthStore from "./store/AuthStore";
import AnalysisStore from "./store/AnalysisStore";
import DoctorsStore from "./store/DoctorsStore";
import UserStore from "./store/UserStore";
import MedicalRecordStore from "./store/MedicalRecordStore";

import "https://kit.fontawesome.com/6d49599fad.js"

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        auth: new AuthStore(),
        userinfo: new UserStore(),
        analysis: new AnalysisStore(),
        doctors: new DoctorsStore(),
        records: new MedicalRecordStore()
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);
