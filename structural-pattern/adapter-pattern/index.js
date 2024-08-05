const localStorage = require('./localStorage.js');

console.log('localStorage length => ', localStorage.length);

const uuid = localStorage.getItem("user_id");

console.log("user-id", uuid);

if(!uuid) {
    console.log("User ID not found. Setting the user id and token...");
    localStorage.setItem("token", "THISIS A TOKEN");
    localStorage.setItem("user_id", "12345");
} else {
    console.log("user ID Found.", uuid);
    console.log("clearing the user ID");
    localStorage.clear();
}