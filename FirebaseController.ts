import * as firebase from 'firebase';

export class FirebaseController {

    static FirebaseApp;
    static FirebaseDatabase;

    static initialise(_firebaseConfig:IFirebaseConfig): void {
        FirebaseController.FirebaseApp = firebase.initializeApp(_firebaseConfig);
        FirebaseController.FirebaseDatabase = firebase.database();
    }

    static postToDatabase(_config:IUserScore):void {
        FirebaseController.FirebaseDatabase.ref(_config.UserId).set(_config);
    }
}

