import {makeAutoObservable} from "mobx";

export default class DoctorsStore{
    constructor() {
        this._doctor = []
        this._patients = []
        this._searchtypes = [
            {id:"1", type:"По ФИО", column:"FIO"},
            {id:"2", type:"По адресу", column:"address"},
            {id:"3", type:"По номеру карты", column:"card_number"},
        ]

        makeAutoObservable(this)
    }

    setDoctor(doc){ this._doctor = doc }
    setPatients(pat){ this._patients = pat }
    setSearchTypes(type){ this._searchtypes = type }

    get doctor(){ return this._doctor }
    get patients(){ return this._patients }
    get searchtypes(){ return this._searchtypes }

}