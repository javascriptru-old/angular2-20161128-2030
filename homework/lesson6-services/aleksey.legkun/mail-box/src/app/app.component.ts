import { Component } from '@angular/core';
 import { GeneratorService } from './services/generator.service';
 import { MailboxService } from './services/mailbox.service';
 import { GlobvarService } from './services/globvar.service';
 import { ResponseService } from './services/response.service';

 import { IError } from './interfaces/error';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GlobvarService, ResponseService, MailboxService, GeneratorService]
})
export class AppComponent {

  constructor(private generatorService: GeneratorService,
              private globvarService: GlobvarService,
              private responseService: ResponseService,
              private mailboxService: MailboxService) {
              }

  public errorMessage: string;  
  public infoMessage: string;

  public onError(error: IError): void{
    if(error!==undefined)
    {
      this.errorMessage = error.message;
      return;
    }
    this.errorMessage = undefined;
  }

  // public onClick(value: string)
  // {
  //   if(value==='clear')
  //     this.generatorService.clearData();

  //   if(value==='boxes')    
  //     this.generatorService.genMailboxes();

  //   if(value==='letters')    
  //     this.generatorService.genLetters();
  // }



}
