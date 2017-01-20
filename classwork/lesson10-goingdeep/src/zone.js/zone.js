let zone = {
    tasks: []
};
let oldSetTimeout = setTimeout;
setTimeout = (callback, time) => {
  //start asyc operation
  //zone.tasks.push(new Task(setTimeout,));
  oldSetTimeout(() => {
      callback();
      //end asyc operation
      //zone.tasks
  }, time);
}



//------
zone.run( () => {
    foo();
    setTimeout(() => {
        console.log('hello');
    });
    bar();
});
//------





let user = {
    name: 'Bob',
    age: 20
};

let user2 = (copy(user).age = 13);





