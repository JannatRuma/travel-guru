import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                displayName: displayName,
                email: email,
                success: true
            }
            return signedInUser;
        })
        .catch(error => {
            console.log(error);
            console.log(error.message);
        })
}
export const handleFbSignIn = () => {

    const fbProvider = new firebase.auth.FacebookAuthProvider();

    return firebase.auth().signInWithPopup(fbProvider)
        .then(res => {
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                displayName: displayName,
                email: email,
                success: true
            }
            return signedInUser;
        }).catch(error => {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn: false,
                displayName: '',
                email: '',
                error: '',
                success: false
            }
            return signedOutUser;
        })
        .catch(err => {
            console.log(err)
        })
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserName(name);
            return newUserInfo;
        })
        .catch(error => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}
export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            // const { displayName } = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            // newUserInfo.isSignedIn = true;
            // newUserInfo.email = email;
            // newUserInfo.name = displayName;
            return newUserInfo;
        })
        .catch(error => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}
const updateUserName = displayName => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: displayName
    }).then(function () {
        console.log('User name updated successfully!')
    }).catch(function (error) {
        console.log(error)
    });
}