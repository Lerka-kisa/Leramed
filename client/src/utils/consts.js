//Guest
export const CLINIK_ROUTE = `/`
export const LOGIN_ROUTE = `/login`
export const LOGOUT_ROUTE = `/logout`
export const REGISTRATION_ROUTE = `/register`
export const TICKET_ROUTE = `/tickets`
//////////export const DOCTORS_ROUTE = `/doctors`
//////////export const BLOG_ROUTE = `/blog`

//Admin
export const ADMIN_ROUTE = `/admin`
export const ADMIN_TICKET_ROUTE = ADMIN_ROUTE + `/tickets`
export const ADMIN_HOUSECALL_ROUTE = ADMIN_ROUTE + `/housecalls`
export const ADMIN_ANALYSIS_ROUTE = ADMIN_ROUTE + `/analysis`
export const ADMIN_ANALYSIS_NORM_ROUTE = ADMIN_ROUTE + `/analysisnorm`
export const ADMIN_DOCTOR_ROUTE = ADMIN_ROUTE + `/doctors`
export const ADMIN_PATIENTS_ROUTE = ADMIN_ROUTE + `/patients`
export const ADMIN_MEDCARDS_ROUTE = ADMIN_ROUTE + `/medcards`
export const ADMIN_TIMETABLE_ROUTE = ADMIN_ROUTE + `/timetable`

//Doctors
export const DOCTOR_ROUTE = `/doctor`
export const DOCTOR_INFO_ROUTE = DOCTOR_ROUTE + `/info`
export const DOCTOR_APPOINTMENTS_ROUTE = DOCTOR_ROUTE + `/appointments`
export const DOCTOR_TICKET_ROUTE = DOCTOR_ROUTE + "/tickets"
export const DOCTOR_HOUSECALL_ROUTE = DOCTOR_ROUTE + `/housecalls`
export const DOCTOR_ANALYSIS_ROUTE = DOCTOR_ROUTE + `/analysis`
export const DOCTOR_ANALYSIS_NORM_ROUTE = DOCTOR_ROUTE + `/analysisnorm`
export const DOCTOR_PATIENTS_ROUTE = DOCTOR_ROUTE + `/patients`

//Patients
export const PATIENT_ROUTE = "/patient"
export const PATIENT_INFO_ROUTE = PATIENT_ROUTE + "/info"
export const PATIENT_ADDINFO_ROUTE = PATIENT_ROUTE + "/addinfo"
export const PATIENT_ANALYSIS_NORM_ROUTE = PATIENT_ROUTE + `/analysisnorm`
export const PATIENT_TICKET_ROUTE = PATIENT_ROUTE + "/tickets"
export const PATIENT_HOUSECALL_ROUTE = PATIENT_ROUTE + `/housecalls`
export const PATIENT_MEDCARDS_ROUTE = PATIENT_ROUTE + `/medcard`
export const PATIENT_ANALYSIS_ROUTE = PATIENT_ROUTE + `/analysis`
