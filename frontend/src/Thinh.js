import React from 'react';
import { print, log } from './text-helper.js';
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

class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }
  print() {
    console.log(`${this.destination} will take ${this.length} days.`)
  }
}
const trip = new Vacation("Santiago, Chile", 7)
trip.print() // Santiago, Chile will take 7 days

class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }
  print() {
    super.print();
    console.log(`Bring your ${this.gear.join(" and your ")}`);
  }
}


const trip1 = new Expedition("Mt.Whitney", 3, ["sunglasses", "prayer flags", "camera"])

trip1.print();

print('aaasdfsdfsd')
log('logging a message')
function Thinh() {
    return (
        <p>Thinh</p>
    )
}

export default Thinh
