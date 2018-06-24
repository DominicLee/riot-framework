interface IFirebaseConfig {
    apiKey: string
    authDomain: string
    databaseURL: string
}

interface IUserScore {
    UserId: string
    FirstName: string
    LastName: string
    Score: number
    TimeStamp: string
}