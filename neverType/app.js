"use strict";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
//The function never returns anything 
generateError("An error occured", 500);
