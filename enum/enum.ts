enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Shagun',
    age: 28,
    role: Role.ADMIN
}

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

enum RoleIncrement {ADMIN=5, READ_ONLY, AUTHOR};

console.log(RoleIncrement)
// {
//   '5': 'ADMIN',
//   '6': 'READ_ONLY',
//   '7': 'AUTHOR',
//   ADMIN: 5,
//   READ_ONLY: 6,
//   AUTHOR: 7
// }