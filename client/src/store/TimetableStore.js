import {makeAutoObservable} from "mobx";

export default class TimetableStore{
    constructor() {
        this._shifts_types = []
        this._sectors = []
        this._shifts = []
        this._countemptyticket = []
        this._countticket = {}
        this._alltickets = []
        this._allticketsWD = []
        makeAutoObservable(this)
    }

    setTypesOfShifts(type){ this._shifts_types = type }
    setSectors(sector){ this._sectors = sector }
    setShifts(shift){ this._shifts = shift }
    setCountEmptyTickets(count){ this._countemptyticket = count }
    setCountTickets(count){ this._countticket = count }
    setAllTickets(tick){ this._alltickets = tick }
    setAllTicketsWD(tick){ this._allticketsWD = tick }

    get shifts_types(){ return this._shifts_types }
    get sectors(){ return this._sectors }
    get shifts(){return this._shifts}
    get count_empty_tickets(){return this._countemptyticket}
    get count_tickets(){return this._countticket}
    get all_tickets(){return this._alltickets}
    get all_ticketsWD(){return this._allticketsWD}

}