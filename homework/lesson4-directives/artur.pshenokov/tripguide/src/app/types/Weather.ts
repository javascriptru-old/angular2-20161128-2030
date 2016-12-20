export class Weather {
  constructor(public id:string, public details:string, public overallTemperature:number, public waterTemperature:number) {}
}

export const WeatherMocks:Array<Weather> = [
  new Weather('0', 'cloudy', 15, 9),
  new Weather('1', 'sunny', 25, 18),
  new Weather('2', 'rain', 14, 7),
  new Weather('3', 'snow', 2, 1)];
