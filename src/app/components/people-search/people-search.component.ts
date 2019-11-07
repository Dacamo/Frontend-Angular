import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from 'src/app/model/tipoDocumento';
import {TipoDocumentoService} from 'src/app/service/TipoDocumento-service.service'
import {PersonaService} from '../../service/persona-service.service'
import { Persona } from 'src/app/model/persona';


@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit {

  personas: Persona[] = [];
  public tipoDocumentos: TipoDocumento[];


  constructor(
    private tipoDocumentoService: TipoDocumentoService,
    private personaService: PersonaService) { }

  ngOnInit() {

    this.tipoDocumentoService.listarDocumentos().subscribe(
      (tipoDocumentos) => {
        this.tipoDocumentos = tipoDocumentos;
      }
    );
  }

  getByTipoDocumentoAndNroDocumento(tipoDocumento: number, nroDocumento: number){
    this.personaService.getByTipoDocumentoAndNroDocumento(tipoDocumento, nroDocumento).subscribe(
      (persona) =>{
        this.personas = persona;
        console.log("esta es la persona que se trae", persona);

      }
    );
}
}
