const accountId = 144553
let accountEmail = "vatsal@gmail.com"
var accountPassword = "12345"
accountCity = "Surat"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hs@hs.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope.
*/
console.table([accountId, accountEmail, accountPassword, accountCity , accountState])