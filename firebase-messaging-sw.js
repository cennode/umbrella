importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "umbrella-e6536.firebaseapp.com",
    databaseURL: "https://umbrella-e6536-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "umbrella-e6536",
    storageBucket: "umbrella-e6536.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
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
