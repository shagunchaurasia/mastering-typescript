"use strict";
function addHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
