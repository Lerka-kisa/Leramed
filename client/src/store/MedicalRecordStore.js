import {makeAutoObservable} from "mobx";

export default class MedicalRecordStore {
    constructor() {
        this._record = [
            {id: "1", date: "2002-10-10", record: "болит попа", recommendation:"не давай бить попу"},
            {id: "2", date: "2002-10-10", record: "болит рука", recommendation:"найди парня, пускай он тяжести носит"},
            {id: "3", date: "2002-10-10", record: "болит горло", recommendation:"чаю попей"},
            {id: "4", date: "2002-10-10", record: "болит душа", recommendation:"ПИВО!!!!!!"}
        ]


        makeAutoObservable(this)
    }

    setRecord(info){ this._record = info }

    get record(){ return this._record }

}