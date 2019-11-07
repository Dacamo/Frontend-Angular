import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { ActivatedRoute, Router} from '@angular/router';
import {PersonaService} from '../../service/persona-service.service'
import { TipoDocumento } from 'src/app/model/tipoDocumento';
import { TipoDocumentoService } from 'src/app/service/TipoDocumento-service.service';


@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.css']
})
export class PeopleEditComponent implements OnInit {

  public tipoDocumentos: TipoDocumento[];
  persona = new Persona();


  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService,
    private tipoDocumentoService: TipoDocumentoService,
    private router: Router
  ) { }


  ngOnInit() {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.personaService.getById(id).subscribe(
      (persona) =>{
        this.persona = persona;
      }
    )

    this.tipoDocumentoService.listarDocumentos().subscribe(
      (tipoDocumentos) => {
        this.tipoDocumentos = tipoDocumentos;
      }
    );

  }

  update(){
    this.personaService.actualizar(this.persona).subscribe(

         _ => {

           this.router.navigate(["/people-list"]);
         }
    )
    }




}
