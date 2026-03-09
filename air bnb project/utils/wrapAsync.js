module.exports =(fn) =>{
    return (_req, res, next) => {
        fn(_req,res,next).catch(next);
    }
} 