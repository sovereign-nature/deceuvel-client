const { request, gql } = require('graphql-request');


async function getSoilData(args={}) {
    var aux = [];

    if(args.amount) aux.push("amount: " + args.amount);
    if(args.location) aux.push("location: \"" + args.location + "\"");
    if(args.start_year) aux.push("start_year: " + args.start_year);
    if(args.end_year) aux.push("end_year: " + args.end_year);

    var arg_str = aux.length>0? "("+aux.join(", ")+") " : "";

    const query = gql`{
      soil_samples ${arg_str}{
        year
        location
        Cu
        Ni
        Pb
        Zn
        Cr
        Fe
        Mn
      }
    }`;

    return request(this.our_url, query);
}

async function getAirData(args={}) {
    const query = gql`{
        stations {
        id
        html
        latitude
        longitude

        latestReading {
          timestamp

          samples {
            pollutant {
              id
            }

            value {
              value
            }
          }
        }

        latestHourlyData {
          timestamp

          averages {
            pollutant {
              id
            }

            value {
              value
            }
          }

          aqi {
            value
          }
        }
      }
    }`;

    // filter directly in graphql seems not to be supported
    return request(this.air_url, query).then( (data) => {return {stations: data.stations.filter( (el) => ['6', '7'].includes(el.id))}});

    // return request(this.air_url, query);
}

async function getHistoricalAirData(args={}) {
    var aux = [];

    if(args.amount) aux.push("amount: " + args.amount);
    if(args.start) aux.push("start: \"" + args.start + "\"");
    if(args.end) aux.push("end: \"" + args.end + "\"");

    var arg_str = aux.length>0? "("+aux.join(", ")+") " : "";

    const query = gql`{
      air_samples ${arg_str}{
          time
          number
          airpressure
          humidity
          temperature
          winddirection
          windspeed
          CO
          CO2
          NH3
          NO
          NO2
          O3
          PM10
          PM2_5
          SO2
      }
    }`;

    return request(this.our_url, query);
}

async function getSoilmaniaParametersData(args={}) {
    var aux = [];

    if(args.amount) aux.push("amount: " + args.amount);
    if(args.start) aux.push("start: \"" + args.start + "\"");
    if(args.end) aux.push("end: \"" + args.end + "\"");

    var arg_str = aux.length>0? "("+aux.join(", ")+") " : "";

    const query = gql`{
      soilmania_parameters ${arg_str}{
          time
          acidity
          oxygen_index
          soil_conductivity
          soil_moisture
          soil_temperature
      }
    }`;

    return request(this.our_url, query);
}

async function getSoilmaniaElementsData(args={}) {
    var aux = [];

    if(args.amount) aux.push("amount: " + args.amount);
    if(args.start) aux.push("start: \"" + args.start + "\"");
    if(args.end) aux.push("end: \"" + args.end + "\"");

    var arg_str = aux.length>0? "("+aux.join(", ")+") " : "";

    const query = gql`{
      soilmania_elements ${arg_str}{
          time
          Al
          As
          B
          Ca
          Cd
          Co
          Cu
          Fe
          Hg
          K
          Mg
          Mn
          Mo
          N
          Na
          Ni
          P
          Pb
          S
          Se
          Si
          Zn
      }
    }`;

    return request(this.our_url, query);
}


async function getGisData() {
    // TODO
}

module.exports = function() {
    this.our_url = "http://89.233.107.133:3030/graphql";
    //this.soil2_url = soil2_url;
    this.air_url = "https://nox.soops.nl/test/graphql";
    //this.gis_url = undefined;

    this.getSoilData = getSoilData;
    this.getAirData = getAirData;
    this.getHistoricalAirData = getHistoricalAirData;
    //this.getGisData = getGisData;
    this.getSoilmaniaParametersData = getSoilmaniaParametersData;
    this.getSoilmaniaElementsData = getSoilmaniaElementsData;
}
