const DeCeuvelClient = require("../index.js");

var client = new DeCeuvelClient();

async function main() {
    var samples = undefined;

    // get all samples
    samples = await client.getSoilmaniaElementsData();
    console.assert(samples?.soilmania_elements.length == 4, "get all samples");

    // get 2 samples
    samples = await client.getSoilmaniaElementsData({amount: 2});
    console.assert(samples?.soilmania_elements.length == 2, "get 2 samples");

    // get all samples between date range
    samples = await client.getSoilmaniaElementsData({start: "2022-01-30T17:52:48.000Z", end: "2022-01-31T17:53:51.000Z"});
    console.assert(samples?.soilmania_elements.length == 3, "get all samples between date range");

    console.log("All tests passed!");
}

main();
