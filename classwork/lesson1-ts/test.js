"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Lesson1;
(function (Lesson1) {
    var Book = (function () {
        function Book(title) {
            this._title = '"' + title + '"';
        }
        Object.defineProperty(Book.prototype, "title", {
            get: function () {
                return this._title;
            },
            set: function (title) {
                this._title = title;
            },
            enumerable: true,
            configurable: true
        });
        Book.prototype.open = function (page) {
            //Book.coverTypes
            //this.title 
        };
        Book.coverTypes = [''];
        return Book;
    }());
    var Notebook = (function (_super) {
        __extends(Notebook, _super);
        function Notebook(title) {
            _super.call(this, title);
        }
        Notebook.prototype.writeIn = function (text) {
            if (text.length) {
                this.used = true;
            }
        };
        return Notebook;
    }(Book));
    var myBook1 = new Book('Interesting book');
    var myBook2 = new Notebook('Interesting notebook');
    // public - protected - private
    // get - set
    // static
    // arrow functions
    var summ = function (a, b) {
        return a + b;
    };
    //var self = that = this;
    // ar.map((item) => this.items.push(item) )
    var template = "\n<div>\n" + name + "\n</div>\n";
})(Lesson1 = exports.Lesson1 || (exports.Lesson1 = {}));
