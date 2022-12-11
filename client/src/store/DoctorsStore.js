import {makeAutoObservable} from "mobx";

export default class DoctorsStore{
    constructor() {
        this._doctor = []
        this._patients = []

        makeAutoObservable(this)
    }

    setDoctor(doc){ this._doctor = doc }
    setPatients(pat){ this._patients = pat }

    get doctor(){ return this._doctor }
    get patients(){ return this._patients }

}