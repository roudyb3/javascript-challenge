// from data.js
var tableData = data;

//reference the table body
var tbody = d3.select("tbody");
var table = d3.select("#ufo-table");


//use a for each to loop through the data.js file and add in the text into the table body
function createTable(data) {
    tbody.html("");
    data.forEach(function(ufoSightings) {
        console.log(ufoSightings)
        var row = tbody.append("tr");

        Object.entries(ufoSightings).forEach(function([key,value]) {
            console.log(key, value);
            // append the cell to a row for each value in the object
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

createTable(tableData);

//form filter
//select button and form
var form = d3.select("#filters");
var button = d3.select("#filter-btn");

//create event handlers
form.on("change", runEnter);
button.on("click", runEnter);

//complete the event handler function for the form
function runEnter() {

    //prevent the form from reloading
    d3.event.preventDefault();

    // get the raw HTML node from the input element
    var inputElement = d3.select("#datetime");

    //get the value from that input
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    //use the filter to filter the data by date
    var filteredData = tableData.filter(ufoSightings => ufoSightings.datetime === inputValue);
    console.log(filteredData);

    createTable(filteredData)
};
