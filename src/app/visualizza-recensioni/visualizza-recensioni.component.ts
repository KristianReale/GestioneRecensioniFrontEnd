import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recensione } from '../Recensione';
import { ServerserviceService } from '../serverservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizza-recensioni',
  templateUrl: './visualizza-recensioni.component.html',
  styleUrls: ['./visualizza-recensioni.component.css']
})
export class VisualizzaRecensioniComponent implements OnInit {
  recensioni: Recensione[] = [];
  sessionId: string = "";
  recensioneToEdit?: Recensione;

  constructor(
    private servizi: ServerserviceService,
    private route: ActivatedRoute 
    ) {}

  edit(recensione: Recensione){
    this.recensioneToEdit = recensione;
  }
  delete(recId:BigInt): void{
    this.servizi.deleteRecensione(this.sessionId, recId).subscribe(
      deleted => {
        if (deleted){
          this.recensioni.forEach(function(elem, index, arr){
            if (elem.id === recId){
              arr.splice(index, 1);
            }
          });
        }
      }
    );
  }
  ngOnInit(): void {
    var sessionId = this.route.queryParams.subscribe(
              params => {
                var sessionId = params['jsessionid'];
                if (sessionId != null){
                  this.sessionId = sessionId;
                  var obs: Observable<Recensione []> = this.servizi.getRecensioni(sessionId);
                  obs.subscribe(recs => this.recensioni = recs);
                }
              } );

  }

}
