import { Component } from '@angular/core';

@Component({
  selector: 'app-captura-txt',
  templateUrl: './captura-txt.component.html',
  styleUrls: ['./captura-txt.component.css']
})
export class CapturaTxtComponent {
  contenidoArchivo: string | undefined;
  datosTabla: string[][] = [];
  longitudColumnas: number[] = [22, 182, 19, 34, 52, 55, 51, 22, 20]; // Longitud esperada de cada columna

  constructor() {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.readAsText(file, 'ISO-8859-1');
      reader.onload = () => {
        this.contenidoArchivo = reader.result as string;
        this.parsearContenidoArchivo();
      };
      reader.onerror = () => {
        console.error('Error al leer el archivo.');
      };
    }
  }

  parsearContenidoArchivo() {
    if (this.contenidoArchivo) {
      const lineas = this.contenidoArchivo.split('\n');
      const headers = ['Nmero', 'Ttulo', 'N Expediente', 'Procedencia', 'N Interno', 'Organizacin', 'Usuario', 'Fecha', 'Se adjunta'];
      this.datosTabla.push(headers);
  
      for (let i = 1; i < lineas.length; i++) {
        const fila = [];
        let posicion = 0;
        for (let j = 0; j < this.longitudColumnas.length; j++) {
          const longitud = this.longitudColumnas[j];
          const dato = lineas[i].substr(posicion, longitud).trim();
          fila.push(dato);
          posicion += longitud;
        }
        this.datosTabla.push(fila);
      }
    }
  }
}

























  // parsearContenidoArchivo() {
  //   if (this.contenidoArchivo) {
  //     const lineas = this.contenidoArchivo.split('\n');
  //     this.datosTabla = lineas.map(linea => linea.split('\t'));
  //   }
  // }