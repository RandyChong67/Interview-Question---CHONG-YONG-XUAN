var txtUserID = document.getElementById("text-user-id");
var btnAdd = document.getElementById("button-add");
var tableUser = document.getElementById("table-user");

var nameList = [];
txtUserID.value = 1;

function sortTable(){
    if (document.getElementById("ddl-user").value == "user-id"){
        nameList.sort(function (a, b) {
            return a.id - b.id;
       });
    }else if (document.getElementById("ddl-user").value == "user-name"){
        nameList.sort(function (a, b) {
            let x = a.name.toUpperCase(),
                y = b.name.toUpperCase();
            return x == y ? 0 : x > y ? 1 : -1;
       });
    }else{
        nameList.sort(function (a, b) {
            let x = a.occupation.toUpperCase(),
                y = b.occupation.toUpperCase();
            return x == y ? 0 : x > y ? 1 : -1;
       });
    }
    createTable()
}

btnAdd.onclick = function () {
    var userName = document.getElementById("text-user-name").value;
    var userOccupation = document.getElementById("text-user-occupation").value;

    if (userName == "" || userOccupation == "") return
    nameList.push({id: nameList.length + 1, name: userName, occupation: userOccupation});
    txtUserID.value = nameList.length + 1;

    createTable()
}

//create the table with user list
function createTable(){
    while (tableUser.rows.length > 1) {
        tableUser.deleteRow(1);
      }

    for (var i = 0; i < nameList.length; i++){
        var row = tableUser.insertRow(i + 1);
        var cellUserID = row.insertCell(0);
        var cellUserName = row.insertCell(1);
        var cellUserOccupation = row.insertCell(2);
    
        cellUserID.innerHTML = nameList[i].id;
        cellUserName.innerHTML = nameList[i].name;
        cellUserOccupation.innerHTML = nameList[i].occupation;
    }
}