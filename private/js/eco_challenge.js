function createGrid() {

    // firebase.auth().onAuthStateChanged(function (user) {
    //     leader = (user.uid);
    // });
    // I should change the example with leader

    db.collection("users").doc("example")
        .collection("user-challenges").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id);
                console.log(doc.data().isCompleted);
                // var div = $("<div class='jumbotron'>" + doc.data().desc + "</div>");
                // var b1 = $("<a id='slot' type='button'></a><br>");

                var div = $("<div class='form-group'></div><br>");
                var title = $("<p class='chalange_name'>" + doc.id + "></p>");
                var complete = $("<button class='button button5'>Complete</button>");
                var Delete = $("<button class='button button5'>Delete</button>");

                complete.click(function () {
                    console.log(doc.id);
                });
                Delete.click(async function () {
                    await db.collection("users").doc("example")
                        .collection("user-challenges").doc(doc.id).delete().then(() => {
                            console.log("Document successfully deleted!");
                        }).catch((error) => {
                            console.error("Error removing document: ", error);
                        });
                    window.location.reload();
                });




                div.append(title);
                div.append(complete);
                div.append(Delete);
                $("#list").append(div);
            });
        });
}
createGrid();