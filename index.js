console.clear()
console.log("Score: Start");


const showScoreButton = document.getElementById('showScoreButton')
const menuButton = document.getElementById('menuButton')

const resetClockButton = document.getElementById('resetClockButton')
const startStopClockButton = document.getElementById('startStopClockButton')
const gameClockButton = document.getElementById('gameClockButton')
const timeoutButton = document.getElementById('timeoutButton')

const visitorScoreValue = document.getElementById('visitorScoreValue')
const homeScoreValue = document.getElementById('homeScoreValue')
const clockMinutesValue = document.getElementById('clockMinutesValue')
const clockSecondsValue = document.getElementById('clockSecondsValue')

const visitorPlus1Button = document.getElementById('visitorPlus1Button')
const visitorPlus2Button = document.getElementById('visitorPlus2Button')
const visitorPlus3Button = document.getElementById('visitorPlus3Button')
const visitorPlus6Button = document.getElementById('visitorPlus6Button')
const visitorMinus1Button = document.getElementById('visitorMinus1Button')

const homePlus1Button = document.getElementById('homePlus1Button')
const homePlus2Button = document.getElementById('homePlus2Button')
const homePlus3Button = document.getElementById('homePlus3Button')
const homePlus6Button = document.getElementById('homePlus6Button')
const homeMinus1Button = document.getElementById('homeMinus1Button')

var config = {
    apiKey: "AIzaSyAUntLvmquNG4_Wg-ci-tPBONmSy8UojTM",
    authDomain: "uss-pro.firebaseapp.com",
    databaseURL: "https://uss-pro.firebaseio.com",
    projectId: "uss-pro",
    storageBucket: "uss-pro.appspot.com",
    messagingSenderId: "336947098521"
  };

  firebase.initializeApp(config);

console.log("Score: initializeApp completed.")

// Initialize Cloud Firestore through Firebase
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};

const collectionName = 'stuff'

firestore.settings(settings);
var db = firebase.firestore();
console.log("Score: initializeDb completed.")


var docId = "79DA2suC5skOEB6XseDP"
getStuff()
console.log("Score: query completed.")


db.collection("stuff").doc(docId)
.onSnapshot(function(doc) {
  getStuff()
});

function getStuff() {
    var stuffRecord = db.collection(collectionName).doc(docId);
    stuffRecord.get().then(function(doc) {
    if (doc.exists) {
        visitorScoreValue.innerHTML = doc.data().aaa
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch(function(error) {
        console.log("Error getting document:", JSON.stringify(error));
    });    
}

visitorPlus1Button.addEventListener('click', (event) => {
    console.log('visitorPlus1Button')
    db.collection(collectionName).doc(docId)
    .set({ 
        "stuff-stuffname": "Raccoons 7",
        "aaa": "1"
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
})

visitorPlus2Button.addEventListener('click', (event) => {
    console.log('visitorPlus2Button')
    db.collection(collectionName).doc(docId)
    .set({ 
        "stuff-stuffname": "Raccoons 7",
        "aaa": "2"
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
})

visitorPlus3Button.addEventListener('click', (event) => {
    console.log('visitorPlus3Button')
    db.collection(collectionName).doc(docId)
    .set({ 
        "stuff-stuffname": "Raccoons 7",
        "aaa": "3"
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
})

visitorPlus6Button.addEventListener('click', (event) => {  
    console.log('visitorPlus6Button')
    db.collection(collectionName).doc(docId)
    .set({ 
        "stuff-stuffname": "Raccoons 7",
        "aaa": "6"
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
})

visitorMinus1Button.addEventListener('click', (event) => {
    console.log('visitorMinus1Button')
    db.collection(collectionName).doc(docId)
    .set({ 
        "stuff-stuffname": "Raccoons 7",
        "aaa": "0"
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
})

gameClockButton.addEventListener('click', (event) => {
  console.log('gameClockButton')
})

timeoutButton.addEventListener('click', (event) => {
  console.log('timeoutButton')
})

showScoreButton.addEventListener('click', (event) => {
  console.log('showScoreButton')
})

menuButton.addEventListener('click', (event) => {
  console.log('menuButton')
})

setClockButton.addEventListener('click', (event) => {
  console.log('setClockButton')
})

resetClockButton.addEventListener('click', (event) => {
  console.log('resetClock')
  clockMinutesValue.innerHTML = '0'
  clockSecondsValue.innerHTML = '00'
})

startStopClockButton.addEventListener('click', (event) => {
  console.log('startStopClockButton')
})

// .addEventListener('click', (event) => {
//   console.log('')
// })
