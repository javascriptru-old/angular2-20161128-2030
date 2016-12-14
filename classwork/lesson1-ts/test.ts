export namespace Lesson1 {

declare var require: any;
let items:number[] = require('./items.json');
console.log(items[0]);


//let name : string;
//let name : string = 'John';
// let name1 = 'John';
// name1 = 10;
// function sum(a: number, b: number): number {
//    return a + b;  
// }

//string
//number
//boolean

//let items: number[] = [1,2,3];
//let items: Array<string> = ['1','2','3'];

//Enums
//enum Role { User = 7, Manager = 15, Admin }
//console.log(Role.User);
//console.log(Role[15]);

// let something: any = '111111';
// something = 1
// something = [1,2,3]

//void
//function setName(name: string): void {
//   this.name = name; 
//}

interface IBook {
  title: string; 
  open(page: number): void;
}

interface IPages {
  pages: number;
}

class Book implements IBook, IPages {
    private _title: string;
    pages: number;

    static coverTypes: string[] = [''];

    constructor(title: string) {
      this._title = '"' + title + '"';
    }

    set title(title: string) {
      this._title = title;
    }

    get title():string {
      return this._title;
    }

    public open(page: number):void {
      //Book.coverTypes
      //this.title 
    }
}

class Notebook extends Book {
   public used: boolean;

   constructor(title: string) {
     super(title);
   }

   writeIn(text) {
     if(text.length){
       this.used = true;
     }
   }
}

let myBook1 = new Book('Interesting book');
let myBook2 = new Notebook('Interesting notebook');

// public - protected - private
// get - set
// static

// arrow functions
let summ = (a:number, b:number):number => {
    return a + b;
};

//var self = that = this;
// ar.map((item) => this.items.push(item) )

let template = `
<div>
${summ(1,2)}
</div>
`;


//type IBook
//let IBook
}