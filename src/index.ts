/// <reference path="../@types/riot-framework-types.d.ts" />

import {FirebaseController} from './FirebaseController';
import {SimpleController} from './SimpleController';
import {CommsController} from './CommsController';

export class RiotFramework {

    constructor() {
    }

    static initialise():string {
        return 'Initialised';
    }

    static initialiseFirebase(_config:IFirebaseConfig):void {
        FirebaseController.initialise(_config);
    }

    static initialiseComms(_config:ICommsConfig):void {
        CommsController.initialise(_config);
    }

    static createController(_view: any): SimpleController {
        return new SimpleController(_view)
    }

    static postToDatabase(_config:IUserScore):void {
        FirebaseController.postToDatabase(_config);
    }
}