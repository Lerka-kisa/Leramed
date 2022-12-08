import {makeAutoObservable} from "mobx";

export default class DoctorsStore{
    constructor() {
        this._doctor = [
            {id: 1, first_name: "Natali", last_name: "Bashkova", middle_name: "Alekseevna", specialization:"terapevt", photo: "JIJI"}
        ]
        this._role = 0
        //0 - Admin
        //1 - Doctor
        //2 - Patient
        //3 - Guest
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool){ this._isAuth = bool }
    setRole(int){ this._role = int }
    setUser(user){ this._user = user }

    get isAuth(){ return this._isAuth }
    get role(){ return this._role }
    get user(){ return this._user }
}