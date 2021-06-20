const data = require('../data/init.data.json');
const genericService = require('../services/generic.service');


const handleError = (error) => { return { status: { success: false, message: error.message || error } }};
const handleData = (data) => { return { status: { success: true }, data }};
const initData = ()=>{
    for (var model in data) {
        if (data.hasOwnProperty(model)) {
           let modelData = data[model];
           if(genericService[model]){
               genericService[model].bulkCreate(modelData)
           }
        }
    }
}

const corsHandler = (req, res, next) => {
    req.headers["if-none-match"] = "no-match-for-this";
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization, Accept, x-http-method-override");
    if (req.method === "OPTIONS") {
      res.sendStatus(200);
    } else {
      next();
    }
}

const setUpProcessHandlers = ()=>{
    const cases = ['uncaughtException', 'unhandledRejection'];

    cases.forEach((exceptionCase) => {
        process.on(exceptionCase,  (err) => {
            console.error(`${exceptionCase}: ` + err);
        });
    });
}

module.exports = {
    handleError,
    initData,
    setUpProcessHandlers,
    corsHandler,
    handleData,
};
