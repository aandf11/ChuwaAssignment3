const tableInfo = [
  {
    studentName: "John",
    Age: 19,
    Phone: "455 - 983 - 0903",
    Address: "123 Ave, San Francisco, CA, 94011",
  },
  {
    studentName: "Alex",
    Age: 21,
    Phone: "455 - 983 - 0912",
    Address: "456 Rd, San Francisco, CA, 94012",
  },
  {
    studentName: "Josh",
    Age: 22,
    Phone: "455 - 345 - 0912",
    Address: "789 Dr, Newark, CA, 94016",
  },
  {
    studentName: "Matt",

    Age: 23,
    Phone: "321 - 345 - 0912",
    Address: "223 Dr, Sunnyvale, CA, 94016",
  },
];

// let table = document.createElement("table");
// for (let row of Object.keys(tableInfo)) {
//   table.insertRow();
//   for (let cell of row) {
//     let newCell = table.rows[table.rows.length - 1].insertCell();
//     newCell.tectContent = cell;
//   }
// }
// document.body.appendChild(table);

createTable();

function createTable() {
  var headers = ["studentName", "Age", "Phone", "Address"];
  var table = document.createElement("TABLE"); //makes a table element for the page

  for (var i = 0; i < tableInfo.length; i++) {
    var row = table.insertRow(i);
    row.insertCell(0).innerHTML = tableInfo[i].studentName;
    row.insertCell(1).innerHTML = tableInfo[i].Age;
    row.insertCell(2).innerHTML = tableInfo[i].Phone;
    row.insertCell(3).innerHTML = tableInfo[i].Address;
  }

  var header = table.createTHead();
  var headerRow = header.insertRow(0);
  for (var i = 0; i < headers.length; i++) {
    headerRow.insertCell(i).innerHTML = headers[i];
  }

  document.body.append(table);
}

var element = document.createElement("hr");
document.body.appendChild(element);

// const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

// let theList = document.getElementById("myList");

// list.forEach((item) => {
//   let li = document.createElement("li");
//   li.innerText = item;
//   theList.appendChild(li);
// });

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

function makeOList() {
  // Establish the array which acts as a data source for the list
  // Make a container element for the list
  var listContainer = document.createElement("div");
  // Make the list
  var listElement = document.createElement("ol");
  // Set up a loop that goes through the items in listItems one at a time
  var numberOfListItems = list.length,
    listItem,
    i;

  // Add it to the page
  document.getElementsByTagName("body")[0].appendChild(listContainer);
  listContainer.appendChild(listElement);

  for (i = 0; i < numberOfListItems; ++i) {
    // create an item for each one
    listItem = document.createElement("li");

    // Add the item text
    listItem.innerHTML = list[i];

    // Add listItem to the listElement
    listElement.appendChild(listItem);
  }
}
// Usage
makeOList();

var element = document.createElement("hr");
document.body.appendChild(element);

function makeList() {
  // Establish the array which acts as a data source for the list
  // Make a container element for the list
  var listContainer = document.createElement("div");
  // Make the list
  var listElement = document.createElement("ul");
  // Set up a loop that goes through the items in listItems one at a time
  var numberOfListItems = list.length,
    listItem,
    i;

  // Add it to the page
  document.getElementsByTagName("body")[0].appendChild(listContainer);
  listContainer.appendChild(listElement);

  for (i = 0; i < numberOfListItems; ++i) {
    // create an item for each one
    listItem = document.createElement("li");

    // Add the item text
    listItem.innerHTML = list[i];

    // Add listItem to the listElement
    listElement.appendChild(listItem);
  }
}
// Usage
makeList();

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];
