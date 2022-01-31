const DeCeuvelClient = require("../index.js");

var client = new DeCeuvelClient();

async function main() {
    var soil_data = await client.getSoilData();
    console.log(soil_data?.soil_samples.length);

    var air_data = await client.getAirData();
    console.log(air_data?.stations.length);

    var historical_air_data = await client.getHistoricalAirData();
    console.log(historical_air_data?.air_samples.length);
}

main();
