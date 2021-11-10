var objPeople = [
  {
    // Object @ 0 index
    username: "deepamasnani",
    name: "Deepam",
    password: "Deepam@123",
  },
  {
    // Object @ 1 index
    username: "DevSrivastava",
    name: "Devendra",
    password: "Dev@123",
  },
  {
    // Object @ 2 index
    username: "KrishanP",
    name: "Krishan",
    password: "Krishan@123",
  },
];
window.addEventListener("keydown", function () {
  if (this.event.keyCode === 13) {
    getInfo();
  }
});
function getInfo() {
  if (document.getElementById("admin").checked) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (var i = 0; i < objPeople.length; i++) {
      if (
        username == objPeople[i].username &&
        password == objPeople[i].password
      ) {
        alert(
          "welcome " + objPeople[i].name + " you are logged in as an admin"
        );
        location.replace("../Dashboard/index.html");
        return;
      }
    }
    alert("incorrect username or password");
  } else if (document.getElementById("employee").checked) {
    alert("Sorry currently we are working on the admin dashboard");
  } else {
    alert("Please Select One");
  }
}
