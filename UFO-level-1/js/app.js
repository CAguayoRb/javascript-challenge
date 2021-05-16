// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//var UFOviews = data;


tableData.forEach(entry => {
    var row = tbody.append('tr');
    Object.values(entry).forEach(value => {
        var cell = row.append('td')
        cell.text(value)
    })
});

var button = d3.select('#filter-btn');
var form = d3.select('#form')

button.on('click', runEnter);
form.on('click', runEnter);
//button.on('click', command);
//form.on('X', command);


function runEnter() {
    d3.event.preventDefault();

//    var input = d3.select("#date");
//    var inputValue = input.property("value");
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

//    console.log(input);
//    console.log(UFOviews);

    var userFilter = tableData.filter(a => a.datetime === inputValue)
//  
    //console.log(filterData);


    tbody.html('');

    userFilter.forEach(datetime => {
        row = tbody.append('tr');
    Object.values(datetime).forEach(value => {
        var cell = row.append('td');
        cell.text(value);

    });
    })
}





