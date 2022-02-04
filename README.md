# De Ceuvel Client

This repository contains a client, as a `npm` package, to retrieve the data gathered from the [De Ceuvel]() purifying park, located in the Netherlands.

## Requirements

In order to use this, you need to have installed `node.js` and `npm` in your system.

There are two alternatives to use the client: 
i. clone the repository or 
ii. install it as a dependency of another project.

In case of *i*, execute the commands:
```
git clone git@github.com:SovereignNature/deceuvel-client.git
cd deceuvel-client
npm install
```
In case of *ii*, execute the command:
```
npm install https://github.com/SovereignNature/deceuvel-client
```

## Client Functions

To use this client, first you have to import and create a client object:
```
const DeCeuvelClient = require("../index.js");      // If you cloned the client
const DeCeuvelClient = require("deceuvel-client");  // If you installed the client

var client = new DeCeuvelClient();
```

### Air Data

This data comes from two sensors installed at De Ceuvel by the company [Soops.nl](https://nox.soops.nl/). One was installed earlier last year (2021) and the second one only recently (2022). These sensors measure air quality by sensing the presence the following gases and pollutants: CO2, SO2, CO, NO2, O3, NO, NH3 and particulate matter PM2.5 and PM10.

#### Air Samples

Retrieve the current data from the sensors trough our client:
```
var samples = await client.getAirData();
```

#### Historical Air Samples

Retrieve a set of samples that were periodically recorded (there is a time gap in the data due to sensor malfunction):
```
var samples = await client.getHistoricalAirData(options);
```
where `options` is an object with the following optional fields:
```
{
    amount: <Integer>,        // Max amount of samples to retrieve
    start: <ISO Date String>, // Retrieve samples with timestamp greater or equal than start
    end: <ISO Date String>    // Retrieve samples with timestamp lower or equal than end
}
```

### Soil Data



#### Soil Samples

This data was periodically collected since the start of the project back in 2018.

Get soil samples:
```
var samples = await client.getSoilData(options);
```
where `options` is an object with the following optional fields:
```
{
    amount: <Integer>,        // Max amount of samples to retrieve
    location: <String>,       // Retrive only the samples of this location
    start_year: <Integer>,    // Retrieve samples with year greater or equal than start_year
    end_year: <Integer>       // Retrieve samples with year lower or equal than end_year
}
```

#### Soilmania Parameters

This data comes from the Soil Life Sensor from [Soilmania]() we recently installed in the De Ceuvel park. 
It measures soil temperature, Soil moisture, pH, Oxygen, Soil nutrients. 
This information together gives you very holistic insight into soil health and the health of the ecosystem that depends upon it (i.e., trees, bacteria, and animals).

Get soilmania parameters:
```
var samples = await client.getSoilmaniaParametersData(options);
```
where `options` is an object with the following optional fields:
```
{
    amount: <Integer>,        // Max amount of samples to retrieve
    start: <ISO Date String>, // Retrieve samples with timestamp greater or equal than start
    end: <ISO Date String>    // Retrieve samples with timestamp lower or equal than end
}
```

#### Soilmania Element Availability

Get soilmania element availability:
```
var samples = await client.getSoilmaniaElementsData(options);
```
where `options` is an object with the following optional fields:
```
{
    amount: <Integer>,        // Max amount of samples to retrieve
    start: <ISO Date String>, // Retrieve samples with timestamp greater or equal than start
    end: <ISO Date String>    // Retrieve samples with timestamp lower or equal than end
}
```

## Examples

The directory [test](test/) contains a set of examples on how to use this client and its functions.
To run an example, simply execute the command:
```
node test/<TEST_FILE>.js
```
