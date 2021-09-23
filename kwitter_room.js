var firebaseConfig = {
  apiKey: "AIzaSyBlWrcyE6WEui2jKCs0u-NpQANRlT-2ZtU",
  authDomain: "kwitter-project-4e217.firebaseapp.com",
  databaseURL: "https://kwitter-project-4e217-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-4e217",
  storageBucket: "kwitter-project-4e217.appspot.com",
  messagingSenderId: "446161258914",
  appId: "1:446161258914:web:b5b7996b6d4c9cf64a8afb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addroom()
{
  roomname=document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomname).update({ purpose : "adding user" });
}