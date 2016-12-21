"use strict";
var MyObserver = (function () {
    function MyObserver() {
        this.listeners = [];
    }
    MyObserver.prototype.add = function (listener) {
        this.listeners.push(listener);
    };
    ;
    MyObserver.prototype.remove = function (listener) {
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    };
    ;
    MyObserver.prototype.notify = function (message) {
        this.listeners.forEach(function (listener) {
            listener.update(message);
        });
    };
    ;
    return MyObserver;
}());
var listener1 = {
    update: function (message) { return console.log("Listener1: " + message); }
};
var listener2 = {
    update: function (message) { return console.log("Listener2: " + message); }
};
var listener3 = {
    update: function (message) { return console.log("Listener3: " + message); }
};
var MyIterator = (function () {
    function MyIterator(array) {
        this.cursor = 0;
        this.array = array;
    }
    MyIterator.prototype.next = function () {
        return this.array[this.cursor++];
    };
    ;
    MyIterator.prototype.hasNext = function () {
        return this.cursor < this.array.length;
    };
    ;
    return MyIterator;
}());
// let consumer = new MyIterator([1,2,3,4,5,6,7,8,9,10]);
// console.log(consumer.next(), consumer.hasNext());
// console.log(consumer.next(), consumer.hasNext());
// console.log(consumer.next(), consumer.hasNext());
// console.log(consumer.next(), consumer.hasNext());
// console.log(consumer.next(), consumer.hasNext());
// console.log(consumer.next(), consumer.hasNext());
// console.log(consumer.next(), consumer.hasNext());
// console.log(consumer.next(), consumer.hasNext());
// console.log(consumer.next(), consumer.hasNext());
// console.log(consumer.next(), consumer.hasNext());
// console.log(consumer.next(), consumer.hasNext());
// console.log(consumer.next(), consumer.hasNext());
//RxJS
//Observable (это не Observer)
var Observable_1 = require('@reactivex/rxjs/src/Observable');
var sequence = Observable_1.Observable.create(function (observer) {
    observer.next('Hello');
    observer.next(' ');
    observer.next('TypeScript');
    observer.complete();
});
sequence.subscribe(function (item) {
    console.log(item);
});
