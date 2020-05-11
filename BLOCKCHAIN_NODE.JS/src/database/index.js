let mongoose = require("mongoose");

let BlockChainModel = require("./model");

// Connect to Database
mongoose.connect("mongodb://localhost:27017/blockChain", (err) => {
    if(err) 
        return console.log("cannot connect to database");
        console.log("Database is connected");
        connectionCallback();
});

let connectionCallback = () => { };

module.exports.onConnect = (callback) => {
    connectionCallback = callback;
}

