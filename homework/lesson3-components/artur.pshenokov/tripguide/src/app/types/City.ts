export class City {
  constructor(public id:string, public name:string, public followers:number, public following:number, public avatar: string) {
  }
}

export const CityMocks:Array<City> = [
  new City('0', 'Amsterdam', 1236, 2254, 'http://lorempixel.com/104/104/nature/5'),
  new City('1', 'Moscow', 9872, 4146, 'http://lorempixel.com/104/104/nature/6'),
  new City('2', 'London', 4567, 3215, 'http://lorempixel.com/104/104/nature/7'),
  new City('3', 'Tokio', 2165, 3247, 'http://lorempixel.com/104/104/nature/8'),
  new City('4', 'Chicago', 2165, 3247, 'http://lorempixel.com/104/104/nature/6')];
