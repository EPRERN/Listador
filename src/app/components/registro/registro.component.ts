import { Component } from '@angular/core';
import { Registro } from 'src/app/interface/registro.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registros: Registro[] = []; // Aquí almacenarás los registros del archivo TXT
  registrosFiltrados: Registro[] = []; // Aquí almacenarás los registros filtrados por fecha y área
  fechaDesde!: Date;
  fechaHasta!: Date;
  areaSeleccionada!: string;

  displayedColumns: string[] = ['area', 'Numero', 'Titulo', 'Expediente', 'Procedencia', 'NInterno', 'NOrga', 'Fecha'];



  constructor() {
    // Aquí deberías leer el archivo TXT y procesar los datos
    // this.registros = ...; // Asigna los datos procesados aquí
    this.registrosFiltrados = this.registros; // Inicialmente, muestra todos los registros
  }

  aplicarFiltros() {
    this.registrosFiltrados = this.registros.filter(registro =>
      (!this.fechaDesde || registro.Fecha >= this.fechaDesde) &&
      (!this.fechaHasta || registro.Fecha <= this.fechaHasta) &&
      (!this.areaSeleccionada || registro.NOrga === this.areaSeleccionada)
    );
  }




}
