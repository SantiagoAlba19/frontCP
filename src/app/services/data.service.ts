import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Personaje } from '../models/interfaces';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  personaje : Personaje | undefined
  personajes : Personaje[] | undefined;
  personajes$:Subject<Personaje[]>

  constructor(private http : HttpClient) { 
    this.personajes$ = new Subject();
  }
  personajesDestacadosCard= {"id": "01",
  "Nombre":"Personajes Destacados",
  "img":"../../assets/imagenes/personajes.jpeg",
  "patch":"/personajes", 
  "casas":[{"nombre":"slytherin", "img" : "../../assets/imagenes/slytherinLogo.jpeg" },{"nombre":"gryffindor", "img" : "../../assets/imagenes/gryffindorLogo.jpeg" },
  {"nombre":"ravenclaw", "img" : "../../assets/imagenes/ravenclawLogo.jpeg" },
  {"nombre":"hufflepuff", "img" : "../../assets/imagenes/hufflepuffLogo.jpeg" }] }

  categorias =[
    {"id": "02",
    "Nombre":"Profesores",
    "patch":"/profesonres",
    "img":"../../assets/imagenes/profesores.jpeg" },
    
    {"id": "03",
    "Nombre":"Estudiantes",
    "img":"../../assets/imagenes/estudiantes.jpeg" },

    {"id": "04",
    "Nombre":"Solicitudes",
    "img":"../../assets/imagenes/solicitudes.jpeg" }
  ]
  GetPersonajesDest(casa:string){
    this.http.get<Personaje[]>(`http://hp-api.herokuapp.com/api/characters/house/${casa}`).subscribe((resp)=>{
      this.personajes = resp 
      this.personajes$.next(this.personajes)
     })
  }

  GetProfesores(){
    this.http.get<Personaje[]>('http://hp-api.herokuapp.com/api/characters/staff').subscribe((resp)=>{
      this.personajes = resp 
      this.personajes$.next(this.personajes)
     })
  }

  GetEstudiantes(){
    this.http.get<Personaje[]>('http://hp-api.herokuapp.com/api/characters/students').subscribe((resp)=>{
      this.personajes = resp 
      this.personajes$.next(this.personajes)
     })
  }



}
