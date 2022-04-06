function generateError (message: string, code:number):never{
    throw {message: message, errorCode: code};
}

//The function never returns anything 

generateError("An error occured", 500)