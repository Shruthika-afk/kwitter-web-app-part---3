//YOUR FIREBASE LINKS

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

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}



function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0            
      });

      document.getElementById("msg").value = "";
}