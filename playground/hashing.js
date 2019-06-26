const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');


var data = {
    id : 1
}


var token = jwt.sign(data , 'sonu');

console.log(token)
var decoded = jwt.verify(token, "sonu")

console.log('decoded', decoded)
// var message = 'im am user no 3'
// var hash = SHA256(message).toString();

// console.log(hash);

// var data = {
//     id  : 1 
// }


// var token = {
//     data,
//     hash : SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
// //data hasg1



// //hash 2
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//     console.log("datas has not been changed")
// }

// else{
//     console.log("Data was changed Do not trust");
// }

