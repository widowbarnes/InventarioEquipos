import { Component } from '@angular/core';
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@Component({

selector:'app-root',

standalone:true,

imports:[
ListadoComponent,
FormularioComponent
],

templateUrl:'./app.component.html',

styleUrl:'./app.component.css'

})


export class AppComponent {

}