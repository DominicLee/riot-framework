import {RiotFramework} from '../src/RiotFramework';
import {FirebaseController} from "../src/FirebaseController";
import uuid from 'uuid';

describe("RiotFrameworkTests", () => {

  describe("Initialise Framework", () => {
    it("Initialises the framework", function () {
      let _initialisationResponse: any = RiotFramework.initialise();
      expect(_initialisationResponse).toEqual('Initialised');
    });
  });

  describe("Initialise Firebase", () => {

    beforeAll(() => {
      spyOn(FirebaseController, 'postToDatabase');

      RiotFramework.initialiseFirebase(<IFirebaseConfig>{
        apiKey: 'AIzaSyAqVI5xIo_PzZ6aEhz0AWYSWseKKLWB2cw',
        authDomain: "rad-riotstarter.firebaseapp.com",
        databaseURL: 'https://rad-riotstarter.firebaseio.com/'
      });
    });

    it("initialises Firebase", function () {
      expect(FirebaseController.FirebaseApp).toBeDefined();
      expect(FirebaseController.FirebaseDatabase).toBeDefined();
      expect(FirebaseController.postToDatabase).toHaveBeenCalled();
    });
  });
});