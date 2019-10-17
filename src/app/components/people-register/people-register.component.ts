import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import {TipoDocumento} from 'src/app/model/tipoDocumento'
import {PersonaService} from 'src/app/service/persona-service.service'
import {TipoDocumentoService} from 'src/app/service/TipoDocumento-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-register',
  templateUrl: './people-register.component.html',
  styleUrls: ['./people-register.component.css']
})
export class PeopleRegisterComponent implements OnInit {

  public persona: Persona = new Persona();
  public tipoDocumentos: TipoDocumento[];

  constructor(private personaService: PersonaService, private tipoDocumentoService: TipoDocumentoService, private router: Router) { }

  ngOnInit() {
    this.tipoDocumentoService.listarDocumentos().subscribe(
      (tipoDocumentos) => {
        this.tipoDocumentos = tipoDocumentos;
      }
    );
  }

  insert(){
      this.personaService.insert(this.persona).subscribe(
           _ => {
             this.router.navigate(["/listar"]);
           }
      )
  }

}
