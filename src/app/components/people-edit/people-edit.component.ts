import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { ActivatedRoute} from '@angular/router';
import {PersonaService} from '../../service/persona-service.service'


@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.css']
})
export class PeopleEditComponent implements OnInit {



  persona = new Persona();


  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService,


  ) { }


  ngOnInit() {

    const id = Number.parseInt(this.route.snapshot.paramMap.get('id'));

    this.personaService.getById(id).subscribe(
      (persona) =>{
        this.persona = persona;
        console.log(this.persona);


      }
    )

  }



}
