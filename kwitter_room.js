//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCwX9v8bUQM4cLTl0r6H4l2iYw3xKfrO-w",
      authDomain: "kwitter-71d26.firebaseapp.com",
      databaseURL: "https://kwitter-71d26-default-rtdb.firebaseio.com",
      projectId: "kwitter-71d26",
      storageBucket: "kwitter-71d26.appspot.com",
      messagingSenderId: "592069845776",
      appId: "1:592069845776:web:e336c00a7465f0e68ebb95"
    };
    
    firebase.initializeApp(firebaseConfig);  
   
function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class ='room_name' id ="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row; 
                  //End code
            });
      });
}
getData();

function logout() {
      window.location = "index.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}