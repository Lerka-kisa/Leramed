import {
    ADMIN_DOCTOR_ROUTE,
    ADMIN_HOUSECALL_ROUTE,
    ADMIN_PATIENTS_ROUTE,
    ADMIN_TICKET_ROUTE,
    ADMIN_TIMETABLE_ROUTE,
    DOCTOR_APPOINTMENTS_ROUTE,
    DOCTOR_HOUSECALL_ROUTE,
    DOCTOR_INFO_ROUTE,
    DOCTOR_PATIENTS_ROUTE,
    DOCTOR_TICKET_ROUTE,
    LOGIN_ROUTE,
    CLINIK_ROUTE,
    REGISTRATION_ROUTE,
    PATIENT_INFO_ROUTE,
    PATIENT_TICKET_ROUTE,
    PATIENT_HOUSECALL_ROUTE,
    PATIENT_MEDCARDS_ROUTE,
    PATIENT_ANALYSIS_ROUTE,
    ADMIN_ANALYSIS_NORM_ROUTE, DOCTOR_ANALYSIS_NORM_ROUTE, PATIENT_ANALYSIS_NORM_ROUTE, PATIENT_ADDINFO_ROUTE
} from "./utils/consts";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import Tickets from "./pages/Tickets";
import HouseCalls from "./pages/HouseCalls";
import TimeTable from "./pages/Admin/TimeTable";
import InfoDoctors from "./pages/Admin/InfoDoctors";
import Analysis from "./pages/Patient/Analysis";
import Patients from "./pages/Admin/Patients";
import InfoD from "./pages/Doctor/Info";
import InfoP from "./pages/Patient/Info";
import Appointments from "./pages/Doctor/Appointments";
import MedCard from "./pages/Patient/MedCard";
import AnalysisNorms from "./pages/Admin/AnalysisNorms";
import AddInfo from "./pages/Patient/AddInfo";

export const adminRoutes = [
    { path: ADMIN_TICKET_ROUTE, Component: Tickets },
    { path: ADMIN_HOUSECALL_ROUTE, Component: HouseCalls },
    { path: ADMIN_TIMETABLE_ROUTE, Component: TimeTable },
    { path: ADMIN_DOCTOR_ROUTE, Component: InfoDoctors },
    { path: ADMIN_ANALYSIS_NORM_ROUTE, Component: AnalysisNorms },
    { path: ADMIN_PATIENTS_ROUTE, Component: Patients },
    { path: ADMIN_PATIENTS_ROUTE + "/:id",
        Component: MedCard }
]

export const doctorRoutes = [
    { path: DOCTOR_INFO_ROUTE, Component: InfoD },
    { path: DOCTOR_APPOINTMENTS_ROUTE, Component: Appointments },
    { path: DOCTOR_TICKET_ROUTE, Component: Tickets },
    { path: DOCTOR_HOUSECALL_ROUTE, Component: HouseCalls },
    { path: DOCTOR_ANALYSIS_NORM_ROUTE, Component: AnalysisNorms },
    { path: DOCTOR_PATIENTS_ROUTE, Component: Patients },
    { path: DOCTOR_PATIENTS_ROUTE + "/:id", Component: MedCard  }
]

export const patientRoutes = [
    { path: PATIENT_INFO_ROUTE, Component: InfoP },
    { path: PATIENT_TICKET_ROUTE, Component: Tickets },
    { path: PATIENT_HOUSECALL_ROUTE, Component: HouseCalls },
    { path: PATIENT_ANALYSIS_ROUTE, Component: Analysis },
    { path: PATIENT_ANALYSIS_NORM_ROUTE, Component: AnalysisNorms },
    { path: PATIENT_ADDINFO_ROUTE, Component: AddInfo },
    { path: PATIENT_MEDCARDS_ROUTE, Component: MedCard }
]

export const publicRoutes = [
    { path: CLINIK_ROUTE, Component: Main },
    { path: PATIENT_ADDINFO_ROUTE, Component: AddInfo },
    { path: LOGIN_ROUTE, Component: Auth },
    { path: REGISTRATION_ROUTE, Component: Auth},
]