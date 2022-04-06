"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Shagun',
    age: 28,
    role: Role.ADMIN
};
// TS assigns number to each entry starting from 0
// Corresponding JS 
// var Role;
// (function (Role) {
//     Role[Role["ADMIN"] = 0] = "ADMIN";
//     Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
//     Role[Role["AUTHOR"] = 2] = "AUTHOR";
// })(Role || (Role = {}));
// ;
//Starting value can be incremented using =
var RoleIncrement;
(function (RoleIncrement) {
    RoleIncrement[RoleIncrement["ADMIN"] = 5] = "ADMIN";
    RoleIncrement[RoleIncrement["READ_ONLY"] = 6] = "READ_ONLY";
    RoleIncrement[RoleIncrement["AUTHOR"] = 7] = "AUTHOR";
})(RoleIncrement || (RoleIncrement = {}));
;
console.log(RoleIncrement);
