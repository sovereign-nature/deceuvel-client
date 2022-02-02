const DeCeuvelClient = require("../index.js");

var client = new DeCeuvelClient();

async function main() {
    var samples = undefined;

    // get all samples => unadvised as there are more than 175K samples
    //samples = await client.getHistoricalAirData();
    //console.assert(samples?.air_samples.length == 175680, "get all samples");

    // get 100 samples
    samples = await client.getHistoricalAirData({amount: 100});
    console.assert(samples?.air_samples.length == 100, "get 100 samples");

    // get all samples between date range
    samples = await client.getHistoricalAirData({start: "2022-01-24T13:38:00Z", end: "2022-01-24T14:56:00Z"});
    console.assert(samples?.air_samples.length == 79, "get all samples between date range");

    console.log("All tests passed!");
}

main();
