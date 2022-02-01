const DeCeuvelClient = require("../index.js");

var client = new DeCeuvelClient();

async function main() {

    // get all samples
    var air_data = await client.getAirData();
    console.assert(air_data?.stations.length, "get all samples");

    console.log("All tests passed!");
}

main();
