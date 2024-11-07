const loginMiddleware = (res,req,next) =>{
    console.log("user logged in")
    next();
}

const authMiddleware = (res,req,next) => {
    console.log("user authenticated");
    next();
}

module.exports = {
   loginMiddleware,
   authMiddleware
};