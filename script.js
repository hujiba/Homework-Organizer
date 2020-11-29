function sub()
{
 var an = document.getElementById('AssignmentName').value;
 var dd = document.getElementById('DueDate').value;
 var al = document.getElementById('AssignmentLink').value;
 var ac = document.getElementById('AssignmentClass').value;
 var td = document.getElementById('dropdown').value;

if (an.length == 0){
  alert("Assignment Name is required")
}
else {

if (al.length > 0){
  linkHtml = "<a href=" + al + " target=\"_blank\">"
}
else {
  linkHtml = ""
}
var table = document.getElementById("table");
var rows = table.rows.length; 
var row = table.insertRow(rows);

if (td == "To Do") {
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "<div ondblclick=\"del()\" class=\"myDIV\">" + linkHtml + an + "</a></div> <div class=\"hide\">" + dd + " - " + ac + "</div>";
}
else if (td == "Doing") {
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell2.innerHTML = "<div ondblclick=\"del()\" class=\"myDIV\">" + linkHtml + an + "</a></div> <div class=\"hide\">" + dd + " - " + ac + "</div>"; 
}
else {
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell3.innerHTML = "<div ondblclick=\"del()\" class=\"myDIV\">" + linkHtml + an + "</a></div> <div class=\"hide\">" + dd + " - " + ac + "</div>"; 
}
}
}
function del() {

$('#table').find('tr').click( function(){
table.deleteRow($(this).index()) );
});

table.deleteRow(table.rows.length - 1); 
}