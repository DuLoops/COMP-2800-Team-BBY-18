/**************** Initialize the FirebaseUI Widget using Firebase. ****************/
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            //------------------------------------------------------------------------------------------
            // The code below is modified from default snippet provided by the FB documentation.
            //
            // If the user is a "brand new" user, then create a new "user" in your own database.
            // Assign this user with the name and email provided.
            // Before this works, you must enable "Firestore" from the firebase console.
            // The Firestore rules must allow the user to write. 
            //------------------------------------------------------------------------------------------
            var user = authResult.user;
            if (authResult.additionalUserInfo.isNewUser) { //if new user
                db.collection("users").doc(user.uid).set({ //write to firestore
                        name: user.displayName, //"users" collection
                        email: user.email, //with authenticated user's ID (user.uid)
                        ecopoint: "0",
                        profilePic: "link",
                        bio: "bio"
                    })
                    .then(function () {
                        console.log("New user added to firestore");
                        window.location.assign(
<<<<<<< HEAD
                            "../profile/profile-main.html"); //re-direct to main.html after signup
=======
                            "../html/profile-main.html"); //re-direct to main.html after signup
>>>>>>> Sarah_Makkar_feature1
                    })
                    .catch(function (error) {
                        console.log("Error adding new user: " + error);
                    });

                    
            } else {
                return true;
            }
            return false;
        },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '../profile/profile-main.html',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

