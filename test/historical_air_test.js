const DeCeuvelClient = require("../index.js");

var client = new DeCeuvelClient();

async function main() {
    var historical_air_data = undefined;

    // get all samples => unadvised as there are more than 167K samples
    //historical_air_data = await client.getHistoricalAirData();
    //console.assert(historical_air_data?.air_samples.length == 167040, "get all samples");

    // get 100 samples
    historical_air_data = await client.getHistoricalAirData({amount: 100});
    console.assert(historical_air_data?.air_samples.length == 100, "get 100 samples");

    // get all samples between date range
    historical_air_data = await client.getHistoricalAirData({start: "2022-01-24T13:38:00Z", end: "2022-01-24T14:56:00Z"});
    console.assert(historical_air_data?.air_samples.length == 79, "get all samples between date range");

    console.log("All tests passed!");
}

main();
