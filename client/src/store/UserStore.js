import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._userinfo = {}
        this._card_status = []

        makeAutoObservable(this)
    }

    setUserinfo(info){ this._userinfo = info }
    setCardStatus(info){ this._card_status = info }

    get userinfo(){ return this._userinfo }
    get card_status(){ return this._card_status }

}