import {makeAutoObservable} from "mobx";

export default class MedicalRecordStore {
    constructor() {
        this._record = []

        makeAutoObservable(this)
    }

    setRecord(info){ this._record = info }

    get record(){ return this._record }

}