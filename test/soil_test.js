const DeCeuvelClient = require("../index.js");

var client = new DeCeuvelClient();

async function main() {

    var soil_data = undefined;

    // get all samples
    soil_data = await client.getSoilData();
    console.assert(soil_data?.soil_samples.length == 91, "get all samples");

    // get 10 samples
    soil_data = await client.getSoilData({amount: 10});
    console.assert(soil_data?.soil_samples.length == 10, "get 10 samples");

    // get all samples for location "c1.c"
    soil_data = await client.getSoilData({location: "c1.c"});
    console.assert(soil_data?.soil_samples.length == 3, "get all samples for location 'c1.c'");

    // get all samples of 2018
    soil_data = await client.getSoilData({start_year: 2018, end_year: 2018});
    console.assert(soil_data?.soil_samples.length == 63, "get all samples of 2018");

    console.log("All tests passed!");
}

main();
