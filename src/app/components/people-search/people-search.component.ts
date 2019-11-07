import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from 'src/app/model/tipoDocumento';
import {TipoDocumentoService} from 'src/app/service/TipoDocumento-service.service'


@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit {

  public tipoDocumentos: TipoDocumento[];

  constructor(private tipoDocumentoService: TipoDocumentoService) { }

  ngOnInit() {

    this.tipoDocumentoService.listarDocumentos().subscribe(
      (tipoDocumentos) => {
        this.tipoDocumentos = tipoDocumentos;
        console.log(tipoDocumentos);
      }
    );
  }

}
