"use strict";
var useArr = [
    {
        name: 'lean',
        age: 18
    }
];
var getPersonName = function (person) {
    console.log(person.name, person.gender);
};
var setPersonName = function (person, name) {
    person.name = name;
};
var person = {
    name: 'lean',
    gender: 'male',
    other: '...',
    say: function () {
        return 'say';
    }
};
getPersonName(person);
var User1 = /** @class */ (function () {
    function User1() {
        this.name = 'lee';
    }
    User1.prototype.say = function () {
        return 'say';
    };
    return User1;
}());
var sayHi = function (word) {
    return word;
};
var Single = /** @class */ (function () {
    function Single() {
    }
    ;
    Single.prototype.sayHi = function () {
        return 'hi';
    };
    Single.getInstance = function () {
        if (!Single.instance) {
            Single.instance = new Single();
        }
        return this.instance;
    };
    return Single;
}());
var s1 = Single.getInstance();
var s2 = Single.getInstance();
console.log(s1 === s2);
