import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {
  personajes: Personaje[] | undefined;
  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.getEstudiantes()
  }

  getEstudiantes(){
    var today = new Date();
    var year = today.getFullYear(); 
    this.data.GetEstudiantes();
    this.data.personajes$.subscribe(res =>{
    this.personajes = res
    console.log(this.personajes)

    this.personajes.forEach(personaje => {
      if(personaje.yearOfBirth ){
        personaje.age = year - personaje.yearOfBirth 
      }
    });
  })
}

}
