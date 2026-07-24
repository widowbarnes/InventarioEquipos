import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EquiposService } from '../../services/equipos.service';
import { Equipo } from '../../models/equipo';


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})


export class ListadoComponent {


  equipos: Equipo[] = [];

  codigoBuscar:number = 0;


  constructor(private servicio:EquiposService){}



  ngOnInit(){


    this.servicio.obtenerEquipos();


    this.servicio.equipos$

    .subscribe(datos=>{

      this.equipos = datos;

    });


  }





  buscar(){


    if(this.codigoBuscar > 0){


      this.servicio.buscarEquipo(this.codigoBuscar)

      .subscribe(datos=>{

        this.equipos = datos;

      });


    }


  }






  mostrarTodos(){


    this.servicio.obtenerEquipos();


  }






  actualizarEstado(equipo:Equipo){


    this.servicio.actualizarEstado(
      equipo.codigo,
      equipo.estado
    )

    .subscribe(()=>{


      alert("Estado actualizado correctamente");


      this.servicio.obtenerEquipos();


    });


  }



}