function sub()
{
 var an = document.getElementById('AssignmentName').value;
 var dd = document.getElementById('DueDate').value;
 var al = document.getElementById('AssignmentLink').value;
 var ac = document.getElementById('AssignmentClass').value;
 var td= document.getElementById('ToDo').innerText;
 var table = document.getElementById("table");

var rows = document.getElementById("table").rows.length; 
var row = table.insertRow(rows);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);

cell1.innerHTML = "<a href=" + al + " target=\"_blank\">"+ an + "</a>";
cell2.innerHTML = an; 
cell3.innerHTML = an; 
}

