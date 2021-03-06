//initial firebase
var firebaseConfig = {
  apiKey: "AIzaSyAiOxJBys6rI__SnVnp7TslofL1VBGxUrI",
  authDomain: "food-497fc.firebaseapp.com",
  databaseURL: "https://food-497fc.firebaseio.com",
  projectId: "food-497fc",
  storageBucket: "food-497fc.appspot.com",
  messagingSenderId: "997252497459",
  appId: "1:997252497459:web:82f3fe2e6cb5dacbe12346",
  measurementId: "G-6KG4L4EK3G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
// ดูสถานะการ login
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {

    var email = user.email;
    console.log(email + "signed in");

  } else {
    console.log("sign out");

  }
});
document.addEventListener('init', function (event) {
  var page = event.target;
  if (page.id === 'homePage') {
    console.log("homePage");
    $("#menubtn").click(function () {
      $("#sidemenu")[0].open();
    });

    $("#carousel").empty();
    db.collection("recomended").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var item = `
        <ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
            <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
            </div>
            <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
        </ons-carousel-item>`

        $("#carousel").append(item);

      });
    });

    $("#allbtn").click(function () {
      $("#content")[0].load("shop1.html");
    });
  }
  if (page.id === 'shop1') {
    console.log("shop1");
    $("#shopss").empty();
    db.collection("Starbuck").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var item1 = `
        <ons-button id=${doc.data().idmenu} >
             <ons-list-item modifier="material" class="list-item list-item--material"
                 style="background-color: rgb(255, 255, 255);">
                 <div class="center list-item__center list-item--material__center">
                     <span class="list-item__title list-item--material__title" style="font-size: 15pt">${doc.data().name}</span>
                     <span class="list-item__subtitle list-item--material__subtitle">&nbsp;
                         <ons-icon icon="fa-star" size="15px" style="color: rgb(10, 10, 10);">${doc.data().distance}
                         </ons-icon>
                     </span>
                 </div>
                 <div class="left list-item__left list-item--material__left" >
                     <img class="list-item__thumbnail list-item--material__thumbnail"
                     style="background-image: url('${doc.data().url}')">
                 </div>
             
             </ons-list-item>
         </ons-button>
       `
        $("#shopss").append(item1);

      });
    });
    $("#shopss1").empty();
    db.collection("Yayoi").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var item11 = `
          <ons-button id=${doc.data().idmenu} >
               <ons-list-item modifier="material" class="list-item list-item--material"
                   style="background-color: rgb(255, 255, 255);">
                   
                   <div class="center list-item__center list-item--material__center">
                           
                       <span class="list-item__title list-item--material__title" style="font-size: 15pt">${doc.data().name}</span>
                       <span class="list-item__subtitle list-item--material__subtitle">&nbsp;
                           <ons-icon icon="fa-star" size="15px" style="color: rgb(10, 10, 10);">${doc.data().distance}
                           </ons-icon>
                       </span>
                   </div>
                   <div class="left list-item__left list-item--material__left" >
                       <img class="list-item__thumbnail list-item--material__thumbnail"
                       style="background-image: url('${doc.data().url}')">
                   </div>
               </ons-list-item>
           </ons-button>
         `
        $("#shopss1").append(item11);
      });
    });
    $("#shopss2").empty();
    db.collection("Kfc").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item22 = `
          <ons-button id=${doc.data().idmenu} >
               <ons-list-item modifier="material" class="list-item list-item--material"
                   style="background-color: rgb(255, 255, 255);">
                   
                   <div class="center list-item__center list-item--material__center">
                           
                       <span class="list-item__title list-item--material__title" style="font-size: 15pt">${doc.data().name}</span>
                       <span class="list-item__subtitle list-item--material__subtitle">&nbsp;
                           <ons-icon icon="fa-star" size="15px" style="color: rgb(10, 10, 10);">${doc.data().distance}
                           </ons-icon>
                       </span>
                   </div>
                   <div class="left list-item__left list-item--material__left" >
                       <img class="list-item__thumbnail list-item--material__thumbnail"
                       style="background-image: url('${doc.data().url}')">
                   </div>
               
               </ons-list-item>
           </ons-button>
         `
        $("#shopss2").append(item22);

      });
    });

    $("#shopss3").empty();
    db.collection("Swen").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item33 = `
          <ons-button id=${doc.data().idmenu} >
               <ons-list-item modifier="material" class="list-item list-item--material"
                   style="background-color: rgb(255, 255, 255);">
                   
                   <div class="center list-item__center list-item--material__center">
                           
                       <span class="list-item__title list-item--material__title" style="font-size: 15pt">${doc.data().name}</span>
                       <span class="list-item__subtitle list-item--material__subtitle">&nbsp;
                           <ons-icon icon="fa-star" size="15px" style="color: rgb(10, 10, 10);">${doc.data().distance}
                           </ons-icon>
                       </span>
                   </div>
                   <div class="left list-item__left list-item--material__left" >
                       <img class="list-item__thumbnail list-item--material__thumbnail"
                       style="background-image: url('${doc.data().url}')">
                   </div>
               
               </ons-list-item>
           </ons-button>
         `
        $("#shopss3").append(item33);

      });
    });

    $("#shopss4").empty();
    db.collection("Mister").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item44 = `
          <ons-button id=${doc.data().idmenu} >
               <ons-list-item modifier="material" class="list-item list-item--material"
                   style="background-color: rgb(255, 255, 255);">
                   <div class="center list-item__center list-item--material__center">
                   <span class="list-item__title list-item--material__title" style="font-size: 15pt">${doc.data().name}</span>
                       <span class="list-item__subtitle list-item--material__subtitle">&nbsp;
                           <ons-icon icon="fa-star" size="15px" style="color: rgb(10, 10, 10);">${doc.data().distance}
                           </ons-icon>
                       </span>
                   </div>
                   <div class="left list-item__left list-item--material__left" >
                       <img class="list-item__thumbnail list-item--material__thumbnail"
                       style="background-image: url('${doc.data().url}')">
                   </div>
               
               </ons-list-item>
           </ons-button>
         `
        $("#shopss4").append(item44);

      });
    });
    $("#backhomebtn").click(function () {
      $("#content")[0].load("home.html");
    });

    $("#shopss").click(function () {
      localStorage.setItem("selectedCategory", "1");
      $("#content")[0].load("ListStarbuck.html");
    });
    $("#shopss1").click(function () {
      localStorage.setItem("selectedCategory", "2");
      $("#content")[0].load("ListStarbuck.html");
    });

    $("#shopss2").click(function () {
      localStorage.setItem("selectedCategory", "3");
      $("#content")[0].load("ListStarbuck.html");
    });
    $("#shopss3").click(function () {
      localStorage.setItem("selectedCategory", "4");
      $("#content")[0].load("ListStarbuck.html");
    });
    $("#shopss4").click(function () {
      localStorage.setItem("selectedCategory", "5");
      $("#content")[0].load("ListStarbuck.html");
    });
  }

  if (page.id === 'list') {
    console.log("list");
    var category = localStorage.getItem("selectedCategory");
    console.log("categoryPage:" + category);

    $("#head").empty();
    db.collection("shops").where("idmenu", "==", category).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var item2 = `
        <ons-list-item modifier="material" class="list-item list-item--material"
        style="background-color: rgb(255, 255, 255);">

        <div class="center list-item__center list-item--material__center">

            <span class="list-item__title list-item--material__title" style="font-size: 15pt">&nbsp;&nbsp; ${doc.data().name}</span>
            <span class="list-item__subtitle list-item--material__subtitle">&nbsp;
                <ons-icon icon="fa-star" size="15px" style="color: rgb(10, 10, 10);">${doc.data().distance}
                </ons-icon>
            </span>
        </div>
        <div class="left list-item__left list-item--material__left">
            <img class="list-item__thumbnail list-item--material__thumbnail"
            style="background-image: url('${doc.data().url}')">
        </div>

    </ons-list-item>
       `
          $("#head").append(item2);

        });
      });

    $("#drink").empty();
    db.collection("menu").where("idmenu", "==", category).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var item3 = `
        <ons-col
        style="background: rgb(255, 255, 255); border: 1px solid white; color: black; flex: 0 0 33%; max-width: 40%;"
        width="20%">
            <ons-list-item>
                    <div class="left list-item__left list-item--material__left">
                            <img class="list-item__thumbnail list-item--material__thumbnail"
                            style="background-image: url('${doc.data().url}')">
                        </div>
            </ons-list-item>
        </ons-col>
       
    <ons-col
    style="background: rgb(255, 255, 255); border: 1px solid white; color: black; flex: 0 0 33%; max-width: 40%;"
    width="50%">
        <ons-list-item>
        ${doc.data().name}
        </ons-list-item>
    </ons-col>

    <ons-col
    style="background: rgb(255, 255, 255); border: 1px solid white; color: black; flex: 0 0 33%; max-width: 30%;"
    width="20%">
        <ons-list-item style="text-align: right;color: black">$${doc.data().price}</ons-list-item>
    </ons-col>

    <ons-col
    style="background: rgb(255, 255, 255); border: 1px solid white; color: black; flex: 0 0 33%; max-width: 30%;"
    width="10%">
        <ons-list-item>
                <ons-icon  icon="fa-plus" onClick="add('${doc.data().name}','${doc.data().price}')"  style="color: rgb(31, 30, 30);" ></ons-icon>
        </ons-list-item>
    </ons-col>
       `
          $("#drink").append(item3);

        });
      });


  }
  if (page.id === 'menuPage') {
    console.log("menuPage");

    $("#login").click(function () {
      $("#content")[0].load("login.html");
      $("#sidemenu")[0].close();
    });

    $("#logout").click(function () {
      //firebase sign out
      firebase.auth().signOut().then(function () {
        // Sign-out successful.
        $("#content")[0].load("login.html");
        $("#sidemenu")[0].close();
      }).catch(function (error) {
        // An error happened.
        console.log(error.message);
      });
    });

    $("#home").click(function () {
      $("#content")[0].load("home.html");
      $("#sidemenu")[0].close();
    });

    $("#address").click(function () {
      $("#content")[0].load("address.html");
      $("#sidemenu")[0].close();
    });
  }

  if (page.id === 'loginPage') {
    console.log("loginPage");

    $("#signinbtn").click(function () {
      var email = $("#email").val();
      var password = $("#password").val();
      firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
        content.load('home.html');
      }
      )
        .catch(function (error) {
          ons.notification.alert('login filed')
          console.log(error.message);
        });
    });

    $("#signupbtn").click(function () {
      var content = document.getElementById('content');
      content.load('signup.html');
    });
    $("#backhomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
  }

  if (page.id === 'loginPage') {
    console.log("loginPage");

    $("#gbtn").click(function () {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        content.load('home.html');
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    });
  }

  if (page.id === 'shop1') {
    console.log("shop1");
    $("#backbtn").click(function () {
      var content = document.getElementById('content');
      content.load('home.html');
    });
  }
  if (page.id === 'signup') {
    console.log("signup");

    $("#createbtn").click(function () {

      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function (result) {
        ons.notification.alert('Create User Success')
        content.load('login.html');
      })
        .catch(function (error) {
          // Handle Errors here.

          var errorCode = error.code;
          var errorMessage = error.message;

          if (errorCode === 'auth/weak-password') {
            ons.notification.alert('The password is too weak');
          } else {

            ons.notification.alert(errorMessage);
            content.load('login.html');
          }
          console.log(error);

        });
    });

    $("#backhomebtn").click(function () {
      var content = document.getElementById('content');
      content.load('login.html');
    });
  }

  if (page.id === 'list') {
    console.log("list");

    $("#backbtn").click(function () {
      var content = document.getElementById('content');
      content.load('shop1.html');
    });

    $("#cfbtn").click(function () {
      var content = document.getElementById('content');
      content.load('cart1.html');
    });
  }
  if (page.id === 'cart1') {
    console.log("cart1");

    var arr = [dataCartName];
    var arr1 = [dataCartPrice];
    console.log(arr);
    console.log(arr1);
    
    for (i = 0; i < arr.length  ; i++) {
      for (i = 0;  i < arr1.length ; i++) {
        
      var itemcart = `
      <ons-list>
      <br>
      <ons-row>
          <ons-col>
                  <ons-list-item > ${arr} </ons-list-item>
          </ons-col>
          <ons-col>
                  <ons-list-header style="text-align: right;color: black;">${arr1}</ons-list-header> 
          </ons-col>
        </ons-row>
        <br>
        </ons-list>
             `
          $("#cartdetail").append(itemcart);
      }
  
  }


    $("#backbtn").click(function () {
      var content = document.getElementById('content');
      content.load('ListStarbuck.html');
    });




  }
  if (page.id === 'adrpage') {
    console.log("adrpage");
    var lat, selectedLat;
    var long, selectedLng;
    var onSuccess = function (position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      mapboxgl.accessToken = 'pk.eyJ1IjoiYmhhbnV0YWQiLCJhIjoiY2sybGF0YTR6MDU4MjNocTcyZTFpMWg5YSJ9.AGozFzoDT9EGKLmn_qkm-w';
      var map = new mapboxgl.Map({
        container: 'map', //container id
        style: 'mapbox://styles/mapbox/streets-v11',  //stylesheet location
        center: [long, lat], //starting position
        zoom: 14 //starting zoom

      });
      var marker = new mapboxgl.Marker({
        draggable: true
      })
        .setLngLat([long, lat])
        .addTo(map);

      function onDragEnd() {
        var lngLat = marker.getLngLat();
        selectedLat = lngLat.lat;
        selectedLng = lngLat.lng;
        coordinates.style.display = 'block';
        coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
      }

      marker.on('dragend', onDragEnd);

    };

    function onError(error) {
      alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    $("#setaddress").click(function () {
      ons.notification.alert("Delivery:" + selectedLat + "," + selectedLng);
    });

    $("#backbtn").click(function () {
      var content = document.getElementById('content');
      content.load('home.html');
    });

  }

});
var dataCartName = [];
var dataCartPrice = [];
function add(name,price) {
  localStorage.setItem('additem', name);
  localStorage.setItem('addprice', price);
  var Name = localStorage.getItem("additem");
  var Price = localStorage.getItem("addprice");
   console.log(Name);
   console.log(Price);
  dataCartName.push(Name);
  dataCartPrice.push(Price);
  ons.notification.toast('You have added a product ', {
    timeout: 1000
  });
  displayCart();
}



function displayCart() {
  console.log(dataCartName);
  console.log(dataCartPrice);
 

}




