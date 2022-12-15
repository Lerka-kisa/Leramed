import {makeAutoObservable} from "mobx";

export default class AuthStore {
    constructor() {
        this.check()
        makeAutoObservable(this)
    }

    get role(){ return this._role }
    get id(){ return this._userId }
    get id_acc(){ return this._id_acc }

    check = async () => {
        if (!localStorage.getItem('access_token')) {
            this._role = "GUEST"
            this._userId = null
            this._id_acc = null
        } else {
            this._role = localStorage.getItem('user_role')
            this._userId = localStorage.getItem('user_id')
            this._id_acc = localStorage.getItem('id_acc')
        }
    }
}