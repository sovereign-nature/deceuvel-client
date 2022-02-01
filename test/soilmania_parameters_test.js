const DeCeuvelClient = require("../index.js");

var client = new DeCeuvelClient();

async function main() {
    var samples = undefined;

    // get all samples
    samples = await client.getSoilmaniaParametersData();
    console.assert(samples?.soilmania_parameters.length == 48, "get all samples");

    // get 10 samples
    samples = await client.getSoilmaniaParametersData({amount: 10});
    console.assert(samples?.soilmania_parameters.length == 10, "get 10 samples");

    // get all samples between date range
    samples = await client.getSoilmaniaParametersData({start: "2022-01-31T14:13:40.000Z", end: "2022-01-31T15:33:44.000Z"});
    console.assert(samples?.soilmania_parameters.length == 5, "get all samples between date range");

    console.log("All tests passed!");
}

main();
