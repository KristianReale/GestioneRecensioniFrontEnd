import { Component, Input, OnInit } from '@angular/core';
import { Recensione } from '../Recensione';
import { ServerserviceService } from '../serverservice.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  @Input()jsessionid: string = "";
  @Input()recens?: Recensione;

  saveEdit(rec: Recensione){
    this.servizi.editRecensione(this.jsessionid, rec).subscribe(
      saved => {
        if (saved){
          alert("Modificata con successo");
        }
      }
    )
  }

  constructor(private servizi: ServerserviceService) { }

  ngOnInit(): void {
  }

}
