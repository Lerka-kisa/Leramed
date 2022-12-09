import {makeAutoObservable} from "mobx";

export default class DoctorsStore{
    constructor() {
        this._doctor = []

        makeAutoObservable(this)
    }

    setDoctor(doc){ this._doctor = doc }

    get doctor(){ return this._doctor }

}