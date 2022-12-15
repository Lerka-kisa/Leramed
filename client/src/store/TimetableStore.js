import {makeAutoObservable} from "mobx";

export default class TimetableStore{
    constructor() {
        this._shifts_types = []
        this._shifts = []
        this._alltickets = []
        this._allticketsWD = []

        makeAutoObservable(this)
    }

    setTypesOfShifts(type){ this._shifts_types = type }
    setShifts(shift){ this._shifts = shift }
    setAllTickets(tick){ this._alltickets = tick }
    setAllTicketsWD(tick){ this._allticketsWD = tick }

    get shifts_types(){ return this._shifts_types }
    get shifts(){return this._shifts}
    get all_tickets(){return this._alltickets}
    get all_ticketsWD(){return this._allticketsWD}

}