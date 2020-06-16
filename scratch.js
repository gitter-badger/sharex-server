crypto = require("crypto")

console.log("scratchPad")

var testMap = new Map()


console.log("---")


function createUser(name) {
    key = crypto.randomBytes(8).toString("hex")
    testMap.set(name, key)
}

createUser("timstark69")
createUser("maxifacla")
createUser("connor")
createUser("lukas")

// for (key in newMap.keys)

testMap.forEach((value, key) => {
    console.log(`${key}: ${value}`)
});


/*
function upload(file) {

}
*/