const user = {
    username: "Ram",
    loginCount: 9,
    signedIn: true,
    getUserDetails: function () {
        // Your function body here, if needed
    }
};

// Correct the class name to start with uppercase 'U'
class User {
    constructor(username, loginCount, isLoggedIn) {
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;
        // Do not return this explicitly
    }
}

// Create instances of User class with the corrected class name
const userOne = new User("Ram", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

console.log(userOne);
console.log(userTwo);

 