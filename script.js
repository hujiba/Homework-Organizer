function sub()
{
 var an = document.getElementById('AssignmentName').value;
 var dd = document.getElementById('DueDate').value;
 var al = document.getElementById('AssignmentLink').value;
 var ac = document.getElementById('AssignmentClass').value;
 var td= document.getElementById('ToDo').innerText;

if (an == null){
  alert("Assignment Name is required")
}

var table = document.getElementById("table");
var rows = table.rows.length; 
var row = table.insertRow(rows);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);

cell1.innerHTML = an;
cell2.innerHTML = "<div class=\"myDIV\"><a href=" + al + " target=\"_blank\">" + an + "</a></div> <div class=\"hide\">" + dd + " - " + ac + "</div>"; 
cell3.innerHTML = an; 
}
