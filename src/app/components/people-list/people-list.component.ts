import { Component, OnInit } from '@angular/core';
import {Persona} from '../../model/persona';
import {PersonaService} from '../../service/persona-service.service'

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  personas: Persona[] = [];
  personaSeleccionada = new Persona();

  constructor(private personaService: PersonaService) { }

  ngOnInit() {

  this.personaService.listarPersona().subscribe(
    (personas) => {
      this.personas = personas;
    }
  );
  }

  eliminar(id:number){
    this.personaService.eliminar(id).subscribe(
      _=>{
        this.personas = this.personas.filter(persona => persona != this.personaSeleccionada);
      }
    )
  }

  showModal(persona: Persona){
    this.personaSeleccionada = persona;
  }
}
