import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EquiposService } from '../../services/equipos.service';
import { Equipo } from '../../models/equipo';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {


  equipo: Equipo = {

    codigo: 0,
    nombre: '',
    categoria: '',
    laboratorio: '',
    estado: '',
    responsable: ''

  };


  constructor(private servicio: EquiposService) { }



  guardar() {

    this.servicio.registrarEquipo(this.equipo)

    .subscribe({

      next: (respuesta) => {

        alert("Equipo registrado correctamente");

        // Actualiza la lista automáticamente
        this.servicio.obtenerEquipos();

        this.limpiar();

      },

      error: (error) => {

        console.log(error);

      }

    });

  }



  limpiar() {

    this.equipo = {

      codigo: 0,
      nombre: '',
      categoria: '',
      laboratorio: '',
      estado: '',
      responsable: ''

    };

  }

}