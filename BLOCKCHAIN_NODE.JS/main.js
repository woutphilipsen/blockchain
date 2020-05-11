let database = require("./src/database");
database.onConnect(() => {

    let BlockChain = require("./src/blockChain");

    let blockChain = new BlockChain();
    let hash = require('object-hash');
    let PROOF = 1548;

    blockChain.addNewTransaction("Wout", "Joey", 300);
    blockChain.addNewTransaction("Joey", "Yentl", 150);
    blockChain.addNewTransaction("Dirk", "frituur, curryworst speciale", 2.75);

    blockChain.addNewTransaction("Loon", "Wout", 1800);

    blockChain.addNewTransaction("Dirk", "Wout", 84.95);

    blockChain.addNewTransaction("Dirk", "Joey", 300); 
    blockChain.addNewTransaction("Anderlecht", "Genk", 4000000); 

    

    blockChain.addNewBlock(null);

    console.log("Chain: ", blockChain.chain);

})