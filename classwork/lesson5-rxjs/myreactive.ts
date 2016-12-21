//Observer
interface IListener {
   update(message: string): void; 
}

interface IObserver {
  add(listener: IListener);
  remove(listener: IListener);
  notify(message: string);
} 

class MyObserver implements IObserver {
  private listeners: IListener[] = [];  
  public add(listener: IListener): void {
      this.listeners.push(listener);
  };
  public remove(listener: IListener): void {
      this.listeners.splice(this.listeners.indexOf(listener),1);
  };
  public notify(message: string): void {
    this.listeners.forEach((listener: IListener) => {
        listener.update(message);
    })
  };
}


let listener1: IListener = {
  update: (message: string) => console.log(`Listener1: ${message}`)    
};
let listener2: IListener = {
  update: (message: string) => console.log(`Listener2: ${message}`)    
};
let listener3: IListener = {
  update: (message: string) => console.log(`Listener3: ${message}`)    
};


// let observer = new MyObserver;
// observer.add(listener1);
// observer.add(listener2);
// observer.add(listener3);
// observer.remove(listener1);
// observer.notify('Something really interesting!');


//Iterator

interface IIterator {
    next(): any;
    hasNext(): boolean;
}

class MyIterator implements IIterator {
    private array: any[];
    private cursor: number = 0;

    constructor(array: any[]) {
      this.array = array;
    }

    public next() {
       return this.array[this.cursor++];
    };
    
    public hasNext() {
       return this.cursor < this.array.length;
    };
}

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

import { Observable } from '@reactivex/rxjs/src/Observable';
import { Observer } from '@reactivex/rxjs/src/Observer';
import '@reactivex/rxjs/src/add/observable/from';
import '@reactivex/rxjs/src/add/observable/fromEvent';

let sequence: Observable<string> = Observable.create((observer: Observer<string>) => {
  observer.next('Hello');
  observer.next(' ');
  observer.next('TypeScript');
  observer.complete();
});

sequence.subscribe((item: string) => {
    console.log(item);
});

//Observable.create
//Observable.from
//Observable.fromEvent

let sequence2 = Observable.from([1,2,3]);

sequence2.subscribe((item) => {
    //item
});

let sequence3 = Observable.fromEvent(document.getElementById('someelement'), 'click');

sequence3.subscribe((event) => {
    //event
});