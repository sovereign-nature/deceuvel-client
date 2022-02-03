# De Ceuvel Client

Client for De Ceuvel data sets as a `npm` package.

## Requirements

In order to use this, you need to have installed `node.js` and `npm` in your system.
Then, you need to install the dependencies, with the command:
```
npm install
```

To install this library as a dependency for a project, execute the command:
```
npm install https://github.com/SovereignNature/deceuvel-client
```
## Examples

The directory [test](test/) contains a set of examples on how to use this client.
To run an example, simply execute the command:
```
node test/<TEST_FILE>.js
```

## Functions

To use this client, first you have to import and create a client object:
```
const DeCeuvelClient = require("../index.js");
var client = new DeCeuvelClient();
```

### Air Samples

Get air samples:
```
var samples = await client.getAirData();
```

### Historical Air Samples

Get air samples:
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

### Soil Samples

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

### Soilmania Parameters

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

### Soilmania Element Availability

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
