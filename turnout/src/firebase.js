import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAv7puUjFGUrS0so96svRtv-yAlyMQ0zlk",
    authDomain: "education-bd748.firebaseapp.com",
    databaseURL: "https://education-bd748.firebaseio.com",
    projectId: "education-bd748",
    storageBucket: "education-bd748.appspot.com",
    messagingSenderId: "257455995442"
};
export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events')