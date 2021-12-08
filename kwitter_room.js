
const firebaseConfig = {
      apiKey: "AIzaSyCIriCL9kEsJ-6Pk-ZicFb0Vn_cQ-pLn58",
      authDomain: "welcome--tlqu.firebaseapp.com",
      projectId: "welcome--tlqu",
      storageBucket: "welcome--tlqu.appspot.com",
      messagingSenderId: "543034024227",
      appId: "1:543034024227:web:a60b19cf5b13435dc92c96"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
