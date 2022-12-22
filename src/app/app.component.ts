import { Component, OnInit } from '@angular/core';
import { ServerserviceService } from './serverservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  sessionId: string = "";
  isLogged: Boolean = false;
  title = 'Amministrazione Recensioni';
  
  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    var sessionId = urlParams.get("jsessionid");
    if (sessionId){
      this.servizi.checkLogin(sessionId).subscribe(ok => {
        this.isLogged = ok;
        if (ok){
          if (sessionId != null){
            this.sessionId = sessionId;
          }
        }
      });
    }

  }
  constructor(private servizi: ServerserviceService){}


}
