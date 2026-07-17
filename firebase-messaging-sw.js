importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


const firebaseConfig = {
  apiKey: "AIzaSyC_jt0uVlyqctfNlcY5YAgr8jKEHIAQeak",
  authDomain: "umbrella-e6536.firebaseapp.com",
  databaseURL: "https://umbrella-e6536-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "umbrella-e6536",
  storageBucket: "umbrella-e6536.firebasestorage.app",
  messagingSenderId: "603025911927",
  appId: "1:603025911927:web:a766e9e53089097cf11672",
  measurementId: "G-0R09Q6SP56"
};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cennode.github.io/umbrella/favicon.ico'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
