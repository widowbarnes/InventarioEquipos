import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

import { Equipo } from '../models/equipo';



@Injectable({
  providedIn: 'root'
})


export class EquiposService {


  private url = 'http://localhost:3000/equipos';


  private equiposSubject = new BehaviorSubject<Equipo[]>([]);


  equipos$ = this.equiposSubject.asObservable();



  constructor(
    private http: HttpClient
  ){}





  obtenerEquipos(){


    this.http.get<Equipo[]>(this.url)

    .subscribe({

      next:(datos)=>{


        // Guardar datos para modo offline

        localStorage.setItem(
          'equipos',
          JSON.stringify(datos)
        );


        // Actualizar componentes

        this.equiposSubject.next(datos);


      },


      error:(error)=>{


        console.log(
          "Sin conexión, cargando datos locales"
        );


        const datosGuardados =
        localStorage.getItem('equipos');



        if(datosGuardados){


          this.equiposSubject.next(
            JSON.parse(datosGuardados)
          );


        }


      }


    });


  }






  buscarEquipo(codigo:number):Observable<Equipo[]>{


    return this.http.get<Equipo[]>(
      `${this.url}/${codigo}`
    );


  }






  registrarEquipo(equipo:Equipo):Observable<any>{


    return this.http.post(
      this.url,
      equipo
    );


  }






  actualizarEstado(
    codigo:number,
    estado:string
  ):Observable<any>{


    return this.http.put(

      `${this.url}/${codigo}`,

      {
        estado:estado
      }

    );


  }


}