import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personajesDestacados/:casa', component: PersonajesComponent },
  { path: 'Profesores', component: ProfesoresComponent },
  { path: 'Estudiantes', component: EstudiantesComponent },
  { path: 'Solicitudes', component: SolicitudesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
