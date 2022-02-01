const DeCeuvelClient = require("../index.js");

var client = new DeCeuvelClient();

async function main() {
    var soil_mania_parameters_data = undefined;

    // get all samples
    soil_mania_parameters_data = await client.getSoilmaniaParametersData();
    console.assert(soil_mania_parameters_data?.soil_mania_parameters.length == 48, "get all samples");

    // get 10 samples
    soil_mania_parameters_data = await client.getSoilmaniaParametersData({amount: 10});
    console.assert(soil_mania_parameters_data?.soil_mania_parameters.length == 10, "get 10 samples");

    // get all samples between date range
    soil_mania_parameters_data = await client.getSoilmaniaParametersData({start: "2022-01-31T14:13:40.000Z", end: "2022-01-31T15:33:44.000Z"});
    console.assert(soil_mania_parameters_data?.soil_mania_parameters.length == 5, "get all samples between date range");

    console.log("All tests passed!");
}

main();
