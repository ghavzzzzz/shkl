import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_orKjTVlk3O9v5gQAu7yAjxSwK7vrtFQ",
  authDomain: "chaty-f1486.firebaseapp.com",
  databaseURL: "https://chaty-f1486-default-rtdb.firebaseio.com",
  projectId: "chaty-f1486",
  storageBucket: "chaty-f1486.appspot.com",
  messagingSenderId: "240129715166",
  appId: "1:240129715166:web:04b0e66d04f10c48e34b4f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  apolo=localStorage.getItem("chater_name");
  
  document.getElementById("chater_name").innerHTML="Welcome " + apolo + " !";
  
  function a_r(){
  
      room_name=document.getElementById("poa").value;
  
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
      localStorage.setItem("room_name" , room_name);
  
      window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
          console.log("room_name - " + Room_names);
          row="<div class='room_nami' id="+Room_names+" onclick='redirecttoroom_name(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML+=row;
        //End code
        });});}
  getData();

  function ut() {

    window.location="index.html";
  }
  