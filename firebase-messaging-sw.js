// 백그라운드 웹 푸시 수신을 위한 Firebase 서비스 워커 설정
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// 본인의 Firebase 설정값 입력
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "umbrella-e6536.firebaseapp.com",
    databaseURL: "https://umbrella-e6536-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "umbrella-e6536",
    storageBucket: "umbrella-e6536.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID", // ◀ 특히 이 Sender ID가 정확해야 푸시가 연동됩니다.
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// 앱이 꺼져있거나 백그라운드 상태일 때 알림을 수신하는 로직
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] 백그라운드 메시지 수신: ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cennode.github.io/umbrella/favicon.ico' // 본인 아이콘 주소나 샘플 이미지 주소 입력 가능
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
