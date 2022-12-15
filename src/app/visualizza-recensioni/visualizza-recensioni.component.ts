import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recensione } from '../Recensione';
import { ServerserviceService } from '../serverservice.service';

@Component({
  selector: 'app-visualizza-recensioni',
  templateUrl: './visualizza-recensioni.component.html',
  styleUrls: ['./visualizza-recensioni.component.css']
})
export class VisualizzaRecensioniComponent implements OnInit {
  recensioni: Recensione[] = [];

  constructor(
    private ajax: ServerserviceService 
    ) {}

  ngOnInit(): void {
    var obs: Observable<Recensione []> = this.ajax.getRecensioni();
    obs.subscribe(recs => this.recensioni = recs);
  }

}
