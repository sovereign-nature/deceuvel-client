const DeCeuvelClient = require("../index.js");

var client = new DeCeuvelClient();

async function main() {
    //var soil_data = await client.getSoilData();
    //console.log(soil_data?.samples.length);

    var air_data = await client.getAirData();
    console.log(air_data);
}

main();
