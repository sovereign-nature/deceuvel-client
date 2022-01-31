const { request, gql } = require('graphql-request');


async function getSoilData() {
    const query = gql`{
      samples {
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

    return request(this.soil_url, query);
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

async function getGisData() {
    // TODO
}

module.exports = function() {
    this.soil_url = "http://localhost:3000/graphql";
    //this.soil2_url = soil2_url;
    this.air_url = "https://nox.soops.nl/test/graphql";
    this.gis_url = undefined;

    this.getSoilData = getSoilData;
    this.getAirData = getAirData;
    //this.getGisData = getGisData;
}
