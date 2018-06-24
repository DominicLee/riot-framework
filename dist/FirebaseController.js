"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = require("firebase");
class FirebaseController {
    static initialise(_firebaseConfig) {
        FirebaseController.FirebaseApp = firebase.initializeApp(_firebaseConfig);
        FirebaseController.FirebaseDatabase = firebase.database();
    }
    static postToDatabase(_config) {
        FirebaseController.FirebaseDatabase.ref(_config.UserId).set(_config);
    }
}
exports.FirebaseController = FirebaseController;
