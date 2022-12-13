import {makeAutoObservable} from "mobx";

export default class AnalysisStore{
    constructor() {
        this.check()
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setGender(gender){
        this._gender = gender
    }
    setAgegroup(group){
        this._agegroup = group
    }

    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedGender(gender) {
        this._selectedGender = gender
    }
    setSelectedAgegroup(agegroup) {
        this._selectedAgegroup = agegroup
    }

    setAnalysisnorm(norm){
        this._analysisnorm = norm
    }

    setAnalysis(anal){
        this._analysis= anal
    }

    get types(){ return this._types }
    get gender(){ return this._gender }
    get agegroup(){ return this._agegroup }
    get selectedType(){ return this._selectedType}
    get selectedGender(){ return this._selectedGender}
    get selectedAgegroup(){ return this._selectedAgegroup}
    get analysisnorm(){ return this._analysisnorm }
    get analysis(){ return this._analysis }

    check = async () => {
        this._types = []
        this._gender =[]
        this._agegroup =[]
        this._selectedType = {}
        this._selectedGender = {}
        this._selectedAgegroup = {}

        this._analysisnorm =[]
        this._analysis = []
    }
}