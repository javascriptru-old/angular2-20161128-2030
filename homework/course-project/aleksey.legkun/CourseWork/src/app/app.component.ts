import { Component } from '@angular/core';
import { GeneratorService } from './services/generator.service';
import { GlobvarService } from './services/globvar.service';
import { ResponseService } from './services/response.service';
import { AuthService } from './services/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  title = 'app works!';
  
  errorMessage: string;

  constructor(private generatorService: GeneratorService,
              private globvarService: GlobvarService,
              private responseService: ResponseService,
              private authService: AuthService,
              private router: Router
              ) { }


  clear(){
       this.generatorService.clearData()
                        .subscribe(
                        data => { 
                            console.log(data);
                            },
                          error => {this.errorMessage = error;}
                          );                          
  }


  login(value: boolean){
   this.authService.isLoggedIn = value;
   this.router.navigate(['']);
  }
}
