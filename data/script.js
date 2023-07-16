// Menyembunyikan elemen berdasarkan mode
if (mode == "agenda") {
	  document.getElementById("week").style.display = "none";
  document.getElementById("month").style.display = "none";
} else if (mode == "week") {
	  document.getElementById("agenda").style.display = "none";
  document.getElementById("month").style.display = "none";
} else {
	  document.getElementById("week").style.display = "none";
  document.getElementById("agenda").style.display = "none";
}

// Generate Table Calendar
function generateTableCalendar() {
	var calendar = document.getElementById("calendarTable");
	var table = document.createElement("table");
	var thead = document.createElement("thead");
	var tbody = document.createElement("tbody");
	var headRow = document.createElement("tr");
	["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach(function(el) {
	  var th = document.createElement("th");
	  th.appendChild(document.createTextNode(el));
	  headRow.appendChild(th);
	});
	thead.appendChild(headRow);
	table.appendChild(thead);
	var d = new Date();
	var month = d.getMonth();
	var year = d.getFullYear();
	var firstDay = new Date(year, month, 1);
	var lastDay = new Date(year, month + 1, 0);
	var lastDate = lastDay.getDate();
	var firstDate = firstDay.getDate();
	var startingDay = firstDay.getDay();
	var monthLength = lastDay.getDate();
	var day = 1;
	for (var i = 0; i < 9; i++) {
	  var tr = document.createElement("tr");
	  for (var j = 0; j <= 6; j++) {
					if (i === 0 && j < startingDay) {
		  var td = document.createElement("td");
		  var txt = document.createTextNode("");
		  td.appendChild(txt);
		  tr.appendChild(td);
					} else if (day > monthLength) {
		  break;
					} else {
		  var td = document.createElement("td");
		  var txt = document.createTextNode(day);
		  td.appendChild(txt);
		  tr.appendChild(td);
		  day++;
					}
	  }
	  tbody.appendChild(tr);
				}
					  table.appendChild(tbody);
						  calendar.appendChild(table);
}
//generateTableCalendar();