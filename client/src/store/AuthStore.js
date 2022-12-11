import {makeAutoObservable} from "mobx";

export default class AuthStore {
    constructor() {
        this.check()
        makeAutoObservable(this)
    }

    setIsAuth(bool){ this._isAuth = bool }
    setRole(role){ this._role = role }
    setUser(user){ this._user = user }

    get isAuth(){ return this._isAuth }
    get role(){ return this._role }
    get user(){ return this._user }

    check = async () => {
        if (!localStorage.getItem('access_token')) {
            this._isAuth = false
            this._role = "GUEST"
            this._userId = null
        } else {
            this._isAuth = true
            this._role = localStorage.getItem('user_role')
            this._userId = localStorage.getItem('user_id')
        }
    }
}