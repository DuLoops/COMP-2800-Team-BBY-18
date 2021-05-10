function sayName() {
    firebase.auth().onAuthStateChanged(function (somebody) {
        if (somebody) {
            db.collection("users")
                .doc(somebody.uid)
                // Read
                .get()
                .then(function (doc) {
                    // Extract the first name of the user
                    var name = doc.data().name;
                    var points = doc.data().ecopoint;
                    var email = doc.data().email;

                    if (name) {
                        $(".name-user").html(name);
                        $(".points-user").html(points);
                        $(".email-user").html(email);
                    } else {
                        $(".name-user").html("EcoClub User");
                    }
                });
        }
    });
}
sayName();

function creatediv() {
    let para = document.createElement("div"); // Create a <p> element
    document.body.appendChild(para); // Append <p> to <div> with id="myDIV"
    let text = document.createElement("P");
    text.setAttribute("class", "name");
    para.append(text);
}

creatediv();

function display() {
    firebase.auth().onAuthStateChanged(function (somebody) {
        if (somebody) {
            db.collection("users")
                .doc(somebody.uid)
                // Read
                .get()
                .then(function (doc) {
                    // Extract the first name of the user
                    var name = doc.data().name;

                    if (name) {
                        $(".name").html(name);
                    } else {
                        $(".name").html("name");
                    }
                });
        }
    });
}

function display2() {
    firebase.auth().onAuthStateChanged(function (somebody) {
        if (somebody) {
            db.collection("users")
                .doc(somebody.uid)
                // Read
                .get()
                .then(function (doc) {
                    // Extract the first name of the user
                    var email = doc.data().email;

                    if (email) {
                        $(".name").html(email);
                    } else {
                        $(".name").html("name");
                    }
                });
        }
    });
}