import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._userinfo = {}

        makeAutoObservable(this)
    }

    setUserinfo(info){ this._userinfo = info }

    get userinfo(){ return this._userinfo }

}