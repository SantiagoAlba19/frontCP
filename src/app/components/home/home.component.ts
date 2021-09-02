import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public data : DataService, private router : Router) { }

  ngOnInit(): void {
  }

  navigateToHRA(item: any){
    this.router.navigate([`./personajesDestacados/${item.nombre}`])
  }

  navigateCategoria(item:string){
    console.log(item)
    this.router.navigate([`${item}`])
  }


}
