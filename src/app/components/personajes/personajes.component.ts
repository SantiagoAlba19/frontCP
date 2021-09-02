import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Personaje } from '../../models/interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  urlTree: any;
  personajes: Personaje[] | undefined;

  constructor(private data :DataService,private route: ActivatedRoute) { 
       }
 
  ngOnInit(): void { 

    
    this.getPersonajes();
  }


  getPersonajes( ){
      var today = new Date();
      var year = today.getFullYear(); 
      let casa:any 
      this.route.paramMap.subscribe(parametros  =>{
        casa= parametros; 
      })
      this.data.GetPersonajesDest(casa.params.casa) ;
      this.data.personajes$.subscribe(res =>{
        this.personajes=res;
        
        this.personajes.forEach(personaje => {
          if(personaje.yearOfBirth ){
            personaje.age = year - personaje.yearOfBirth 
          }
        });
      })
    }

}
