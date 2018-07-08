interface IUser {
  UserId: string
  FirstName: string
  LastName: string
}

interface IFirebaseConfig {
  apiKey: string
  authDomain: string
  databaseURL: string
}

interface IFunctionConfig {
  key: string
  callback: Function
}

interface IUserScore extends IUser {
  Score: number
  TimeStamp: string
}

interface ICommsConfig {
  apiUrl: string
}