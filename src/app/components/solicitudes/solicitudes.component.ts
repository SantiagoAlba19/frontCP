import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Personaje } from '../../models/interfaces';


@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {
  solicitudes : Personaje[] 
  users : Array<Personaje>= new Array<Personaje>();
  constructor(public formBuilder : FormBuilder) {
    this.solicitudes =[]
    this.users =[]
   }
  
  ngOnInit(): void {
   this.users =this.getSolicitudes()
   console.log(this.users)
  }

  getSolicitudes() : Personaje[] {
    let usersLocal: Personaje[] = JSON.parse(localStorage.getItem( "usuarios")|| '[]')
    return usersLocal
  }

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required ]),
    patronus: new FormControl('',[Validators.required, ]),
    age: new FormControl('',[Validators.required]),
    foto: new FormControl('',[Validators.required ]),
  });

  submit(){

    if(this.profileForm.valid){
      this.users.push(this.profileForm.value)
      localStorage.setItem("usuarios", JSON.stringify(this.users))
       this.users = JSON.parse(localStorage.getItem( "usuarios")|| '[]')
    }else{
      alert("Todos los campos son requeridos, vuelve a intentarlo")
    }
    

  }

}
