const DeCeuvelClient = require("../index.js");

var client = new DeCeuvelClient();

async function main() {

    var samples = undefined;

    // get all samples
    samples = await client.getSoilData();
    console.assert(samples?.soil_samples.length == 91, "get all samples");

    // get 10 samples
    samples = await client.getSoilData({amount: 10});
    console.assert(samples?.soil_samples.length == 10, "get 10 samples");

    // get all samples for location "c1.c"
    samples = await client.getSoilData({location: "c1.c"});
    console.assert(samples?.soil_samples.length == 3, "get all samples for location 'c1.c'");

    // get all samples of 2018
    samples = await client.getSoilData({start_year: 2018, end_year: 2018});
    console.assert(samples?.soil_samples.length == 63, "get all samples of 2018");

    console.log("All tests passed!");
}

main();
