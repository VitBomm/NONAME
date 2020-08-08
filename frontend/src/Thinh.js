import React from 'react';

var defaultPerson = {
    name: {
        first: 'Shane',
        last: 'McConkey'
    },
    favActivity: 'skiing'
}

function logActivity(p=defaultPerson) {
    console.log(`${p.name.first} loves ${p.favActivity}`)
}
logActivity() // Shane loves skiing


// var lordify = function(firstname) {
//     return `${firstname} of Canterbury`
// }


// var lordify = firstname => `${firstname} of Canterbury`
// console.log(lordify('Dale'))
// console.log(lordify('Daryle'))

// Old

// var lordify = function(firstname, land) {
//     return `${firstname} of ${land}`
// }

// var lordify = (firstname, land) => `${firstname} of ${land}`
var _lordify = (firstname, land) => {
    if (!firstname) {
        throw new Error('A firstname is required to lordify')
    }

    if (!land) {
        throw new Error('A firstname is required to lordify')
    }
    return `${firstname} of ${land}`
}
console.log(_lordify('Dale', 'Canterbury')) // Dale of Canterbury
console.log(_lordify('Daryle', 'Culpepper')) // Daryle of Culpepper


var sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss"
}

var {bread, meat} = sandwich
console.log(bread, meat) // dutch crunch tuna

var [,,firstResort] = ["Kirkwood", "Squaw", "Alpine"]
console.log(firstResort) // Alpine
var name = 'Tallac';
var elevation = 9738;
var funHike = {name, elevation}
console.log(funHike) // {name: "Tallac", elevation: 9738}
var peaks = ["Tallac", "Ralston", "Rose"]
var canyons = ["Ward", "BlackWood"]
var tahoe = [...peaks, ...canyons] // ["Tallac", "Ralston", "Rose", "Ward", "BlackWood"]
console.log(tahoe)
var [last] = peaks.reverse()
console.log(last) // Rose
console.log(peaks.join(', ')) // Rose, Ralston, Tallac

function Thinh() {
    return (
        <p>Thinh</p>
    )
}

export default Thinh