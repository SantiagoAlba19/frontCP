import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit {
  personajes: Personaje[] | undefined;
  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.getPofesores();
  }

  getPofesores(){
    var today = new Date();
    var year = today.getFullYear(); 
      this.data.GetProfesores();
    this.data.personajes$.subscribe(res =>{
      this.personajes = res
      this.personajes.forEach(personaje => {
        if(personaje.yearOfBirth ){
          personaje.age = year - personaje.yearOfBirth 
        }
      });
    })

    
  }

}
