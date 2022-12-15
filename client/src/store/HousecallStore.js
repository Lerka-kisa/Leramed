import {makeAutoObservable} from "mobx";

export default class HousecallStore {
    constructor() {
        this._housecall = []

        makeAutoObservable(this)
    }

    setHousecall(info){ this._housecall = info }

    get housecall(){ return this._housecall }
}