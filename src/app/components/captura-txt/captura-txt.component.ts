import { Component } from '@angular/core';

@Component({
  selector: 'app-captura-txt',
  templateUrl: './captura-txt.component.html',
  styleUrls: ['./captura-txt.component.css']
})
export class CapturaTxtComponent {
  contenidoArchivo: string | undefined;
  datosTabla: string[][] = [];

  constructor() {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.readAsText(file);
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
      const headers = lineas[0].split('\t'); // Obtener los encabezados
      this.datosTabla.push(headers); // Agregar los encabezados a la tabla
  
      for (let i = 1; i < lineas.length; i++) {
        const campos = lineas[i].split('\t'); // Dividir los campos de la línea
        const registro: string[] = [];
        for (let j = 0; j < headers.length; j++) {
          registro.push(campos[j] || ''); // Asegurar que haya un valor para cada campo
        }
        this.datosTabla.push(registro); // Agregar el registro a la tabla
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