const DeCeuvelClient = require("../index.js");

var client = new DeCeuvelClient();

async function main() {

    // get all samples
    var samples = await client.getAirData();
    console.assert(samples?.stations.length == 2, "get all samples");

    console.log("All tests passed!");
}

main();
