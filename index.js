const { request, gql } = require('graphql-request');


async function getSoilData() {
    const query = gql`{
      soil_samples {
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

async function getAirData() {
    const query = gql`{
        stations {
        id

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

async function getHistoricalAirData() {
    const query = gql`{
      air_samples {
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
          "PM2.5"
          SO2
      }
    }`;

    return request(this.our_url, query);
}

async function getGisData() {
    // TODO
}

module.exports = function() {
    this.our_url = "http://localhost:3000/graphql";
    //this.soil2_url = soil2_url;
    this.air_url = "https://nox.soops.nl/test/graphql";
    //this.gis_url = undefined;

    this.getSoilData = getSoilData;
    this.getAirData = getAirData;
    this.getHistoricalAirData = getHistoricalAirData;
    //this.getGisData = getGisData;
}
