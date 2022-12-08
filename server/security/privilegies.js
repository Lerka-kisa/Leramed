const { AbilityBuilder, Ability } = require("@casl/ability");
const {Admin, Doctor, Patient} = require("./roles")
const {rule} = require("./defines");

exports.GetAbilityFor = (req) => {
    const {rules, can} = new AbilityBuilder(Ability);
    switch (req.payload.role) {
        case Admin:
            can(rule.admin);
            break;
        case Doctor:
            can(rule.doctor);
            break;
        case Patient:
            can(rule.patient);
            break;
        default:
            can(rule.guests);
            break;
    }
    req.rules = rules;
    return new Ability(rules);
}