import { Component } from '@angular/core';
import { Registro } from 'src/app/interface/registro.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registros: Registro[] = [];
  registrosFiltrados: Registro[] = [];
  fechaDesde!: Date;
  fechaHasta!: Date;
  areaSeleccionada!: string;
  
  displayedColumns: string[] = ['Area','Numero', 'Titulo', 'Expediente', 'Procedencia', 'NInterno', 'Organiz','Usuario', 'Fecha','Adjunto'];

  constructor() {}

  ngOnInit() {}

  aplicarFiltros() {
    // Lógica de filtrado...
  }

  // Método para capturar los registros leídos
  capturarRegistros(registros: Registro[]) {
    this.registros = registros; // Actualizar los registros con los leídos del archivo
    this.registrosFiltrados = this.registros; // Actualizar los registros filtrados
  }



}
