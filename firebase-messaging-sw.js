importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDl_6i_Crv0j2S3Q4AvhD039YZ-d-VQgp0",
  authDomain: "zainfamilyconnect.firebaseapp.com",
  databaseURL: "https://zainfamilyconnect-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zainfamilyconnect",
  storageBucket: "zainfamilyconnect.firebasestorage.app",
  messagingSenderId: "684377643320",
  appId: "1:684377643320:web:8fc7c19742ab52528b89cd"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const title = payload.notification?.title || "My Family";

  const options = {
    body: payload.notification?.body || "आपके परिवार में नया मैसेज आया है।",
    icon: "./icon.png",
    data: payload.data || {}
  };

  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", event => {
  event.notification.close();

  event.waitUntil(clients.openWindow("./"));
});
