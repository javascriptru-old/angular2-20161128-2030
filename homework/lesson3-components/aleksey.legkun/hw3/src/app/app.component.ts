import { Component, OnInit } from '@angular/core';
import { ICityItem } from './interfaces/icityitem';
import { IHotelItem } from './interfaces/ihotelitem';
import { IWeatherItem } from './interfaces/iweatheritem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private defaultWeather: IWeatherItem = {
       name: '',
       temperature: 0,
       water: 0
     }

  private defaultCity: ICityItem = {
       name: '',
       followers: 0,
       following: 0,
       imgBig: 'images/tick.png',
       imgSmall: 'images/tick.png',
       weather: this.defaultWeather
     }


  private defaultHotel: IHotelItem = {
         name: '',
         addr: '',
         phone: '',
         city:  this.defaultCity,
         img2: 'images/tick.png',
         bigImg: 'images/tick.png'
     }

  public hotelsList : Array<IHotelItem> = [];
  public currentHotel: IHotelItem = this.defaultHotel;
  
  get currentCity(): ICityItem {
        return this.currentHotel.city;
    }

  get currentWeather(): IWeatherItem {
        return this.currentHotel.city.weather;
    }


 public changeHotel(hotel: IHotelItem): void{
    if(hotel===undefined)
    {
      this.currentHotel = this.defaultHotel;
      return;
    }
    this.currentHotel = hotel;
  }

 public onTimer() {
    this.currentWeather.temperature  = Math.round(Math.random() * 100);
    this.currentWeather.water = this.currentWeather.temperature > 10 ? this.currentWeather.temperature - 10: 0; 
  }

  public  startTimer(fn, interval): void {
      interval = interval || 1000;
      let fn1 = fn.bind(this); 
      (function p() {
          fn1();
          setTimeout(() => { p(); }, 5000);
      })();
  }


  ngOnInit() {
   
  
    let w1 : IWeatherItem = {
       name: 'some region 1',
       temperature: 30,
       water: 28
     }

    let w2 : IWeatherItem = {
       name: 'some region 2',
       temperature: 24,
       water: 22
     }


  let c1: ICityItem = {
       name: 'city1',
       followers: 2345,
       following: 263,
       imgBig: 'images/b1.jpg',
       imgSmall: 'images/res.jpg',
       weather: w1
     }
    
     let c2: ICityItem = {
       name: 'city2',
       followers: 564,
       following: 23,
       imgBig: 'images/b2.jpg',
       imgSmall: 'images/res2.jpg',
       weather: w2
     }


     let h1: IHotelItem = {
         name: 'hotel1',
         addr: 'addr1',
         phone: '+234234',
         city:  c1,
         img2: 'images/r1.jpg',
         bigImg: 'images/1.jpg'
     }
     this.currentHotel = h1; 
     this.hotelsList.push(h1);

     let h2: IHotelItem = {
         name: 'hotel2',
         addr: 'addr2',
         phone: '+9565',
         city:  c2,
         img2: 'images/r2.jpg',
         bigImg: 'images/2.jpg'
     };

     this.hotelsList.push(h2);


     let h3: IHotelItem = {
         name: 'hotel3',
         addr: 'addr3',
         phone: '+66332',
         city:  c1,
         img2: 'images/r3.jpg',
         bigImg: 'images/3.jpg'
     };

     this.hotelsList.push(h3);




  
    this.startTimer(this.onTimer, 5000);   
  

  }

}
