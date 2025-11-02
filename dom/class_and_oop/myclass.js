 //ES6

// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email    
//         this.password=password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsrname(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai=new User("chai","chai@gmail","123")
// console.log(chai.encryptPassword())
// console.log(chai.changeUsrname());
 //behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

// Fixed typo in method name
User.prototype.encryptUsername = function() {
    return `${this.username.toUpperCase()}`;
}

const tea = new User("tea", "tea@gmail", "123");
console.log(tea.encryptPassword());      // Output: 123abc
console.log(tea.encryptUsername());      // Output: TEA
