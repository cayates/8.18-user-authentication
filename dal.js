

// all my functions should go here

let userInfo = [];

function addUser(username, password){
    let newUser = {id: (userInfo.length) + 1, username: username, password: password}
    userInfo.push(newUser)
    console.log(userInfo);
}






module.exports = {
    addUser: addUser
  }