export class Hotel {
  constructor(public id:string, public name:string, public description:string, public address:string, public phone:string,
              public firstAvatarUrl:string, public secondAvatarUrl:string, public largeAvatarUrl:string) {
  }
}

export const HotelMocks:Array<Hotel> = [
  new Hotel('0', 'DoubleTree by Hilton', 'Bright rooms & suites in an elegant hotel featuring a bar, 2 restaurants & a gym with a sauna.', 'Kerkstraat 25, 1017 GA Amsterdam', '020 561 3636', 'http://lorempixel.com/50/50/nature/1', 'http://lorempixel.com/50/50/nature/5', 'http://lorempixel.com/405/243/nature/1'),
  new Hotel('1', 'Lloyd Hotel', 'Contemporary rooms in an eclectic hotel with a restaurant/bar & a free ferry to Centraal Station.', ' Pieter Cornelisz Hooftstraat 2, 1071 BX Amsterdam', '020 710 6000', 'http://lorempixel.com/50/50/nature/2', 'http://lorempixel.com/50/50/nature/6', 'http://lorempixel.com/405/243/nature/2'),
  new Hotel('2', 'Hotel De Hallen', 'Chic rooms in a polished hotel overlooking a canal, plus a trendy bar & free breakfast.', 'Spaarndammerdijk 302, 1013 ZX Amsterdam', '020 530 6200', 'http://lorempixel.com/50/50/nature/3', 'http://lorempixel.com/50/50/nature/7', 'http://lorempixel.com/405/243/nature/3'),
  new Hotel('3', 'Downtown Hotel', 'Trendy rooms & suites in 2 historic buildings, plus a spa, an opulent restaurant & a rooftop bar.', 'Oostelijke Handelskade 34, 1019 BN Amsterdam', '020 530 6200', 'http://lorempixel.com/50/50/nature/4', 'http://lorempixel.com/50/50/nature/8', 'http://lorempixel.com/405/243/nature/4'),
  new Hotel('4', 'Uptown Hotel', 'Suites in 2 historic buildings, plus a spa, an opulent restaurant & a rooftop bar.', 'Oostelijke Handelskade 34, 1019 BN Amsterdam', '020 530 6200', 'http://lorempixel.com/50/50/nature/4', 'http://lorempixel.com/50/50/nature/8', 'http://lorempixel.com/405/243/nature/4')];
