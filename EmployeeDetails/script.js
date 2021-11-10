var rollV, nameV, genderV, addressV, phoneV, dojV;
var form = document.getElementById('form');
var btn = document.getElementById('openform');
var flag = false;

var close = document.getElementById('close');

btn.addEventListener('click',function(){
  
    form.style.width = "50%";
    form.style.transition = "0.5s";
    form.style.visibility = "visible";
    flag = true;
    btn.style.visibility = "hidden";
    btn.style.marginTop = "4%";

    document.getElementById('dash').style.marginLeft = "-1%";
  
 
  
})
close.addEventListener('click',()=>{
    btn.style.marginTop = "3%";
    btn.innerHTML = "Add Employee";
    form.style.visibility = "hidden";
    form.style.width = "0%";
    form.style.transition = "0.5s";
    flag = false;
    btn.style.visibility = "visible";

    document.getElementById('dash').style.marginLeft = "-30%";
})

function readFom() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("male").checked ? document.getElementById("male").value : document.getElementById("female").value;
  addressV = document.getElementById("address").value;
  phoneV = document.getElementById("phone").value;
  dojV = document.getElementById("doj").value;
  console.log(rollV, nameV, addressV, genderV ,phoneV, dojV);
}

document.getElementById("insert").onclick = function () {
  readFom();
  console.log(typeof(document.getElementById("roll")))
  if(document.getElementById("roll").value !== "" &&
  document.getElementById("name").value !=="" &&
  document.getElementById("address").value !=="" &&
  document.getElementById("phone").value !=="" &&
  document.getElementById("doj").value !==""){
    firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
      phone: phoneV,
      DOJ: dojV
    });
  alert("New Employee Data is Inserted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("male").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("doj").value = "";
  window.location.reload();
  }else{
      alert("Please Enter The Data");
  }
 
};




function selectAllData() {
    firebase.database().ref('student').once("value", function (All) {
        All.forEach(
            function (curr) {
                var name = curr.val().name;
                var roll = curr.val().rollNo;
                var gender = curr.val().gender;
                var address = curr.val().address;
                var phone = curr.val().phone;
                var doj = curr.val().DOJ;
                AddItemsToTable(name, roll, gender, address, phone, doj);
            }
        )
    })
}
window.onload = selectAllData;
var std = 0;
function AddItemsToTable(name, roll, gender, address, phone, doj) {
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');

    td1.innerHTML = ++std;
    td2.innerHTML = name;
    td3.innerHTML = roll;
    td4.innerHTML = gender;
    td5.innerHTML = address;
    td6.innerHTML = phone;
    td7.innerHTML = doj;
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    tbody.appendChild(trow)
}

