// Code your solution her

const drivers = ["barry", "billy", "bobby", "robert"]

function findMatching(array, string) {
    return array.filter(element => element.toLowerCase() === string.toLowerCase());
}

console.log(findMatching(drivers, "barry")); 

function fuzzyMatch(array, string) {
    return array.filter(element => element.startsWith(string))

}

console.log(fuzzyMatch(drivers, "b"))


const moreDrivers = [
    {name: "david", hometown: "tottenville"},
    {name: "daniel", hometown: "pleasant"},
    {name: "josh", hometown: "grasmere"}
]

function matchName(driverObjects, string) {
    return driverObjects.filter(element => element.name === string)

}

console.log(matchName(moreDrivers, "david"));