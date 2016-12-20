export class City {
  constructor(public id:string, public name:string, public followers:number, public following:number, public avatar: string) {
  }
}
const imageUrl = 'app/components/city/images';

export const CityMocks:Array<City> = [
  new City('0', 'Amsterdam', 1236, 2254, `${imageUrl}/1.jpg`),
  new City('1', 'Moscow', 9872, 4146, `${imageUrl}/2.jpg`),
  new City('2', 'London', 4567, 3215, `${imageUrl}/3.jpg`),
  new City('3', 'Tokio', 2165, 3247, `${imageUrl}/4.jpg`),
  new City('4', 'Chicago', 2165, 3247, `${imageUrl}/5.jpg`),
  new City('4', 'Stambul', 2165, 3247, `${imageUrl}/6.jpg`),
  new City('4', 'New-York', 2165, 3247, `${imageUrl}/7.jpg`),
  new City('4', 'Saint-Petersburg', 2165, 3247, `${imageUrl}/8.jpg`)];
