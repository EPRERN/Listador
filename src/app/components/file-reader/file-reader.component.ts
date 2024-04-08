import { Component, EventEmitter, Output } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { Registro } from 'src/app/interface/registro.interface';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.css']
})
export class FileReaderComponent {
  @Output() registrosLeidos = new EventEmitter<Registro[]>();

  constructor() { }

  onFileDropped(event: NgxFileDropEntry[]) {
    const files: File[] = [];
    for (const droppedFile of event) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          files.push(file);
        });
      }
    }
    if (files.length > 0) {
      // Se encontraron archivos válidos, procesarlos
      this.processFileContent(files[0]); // Solo procesa el primer archivo, puedes adaptar esto según tus necesidades
    } else {
      console.error('No se ha seleccionado un archivo válido.');
    }
  }

  processFileContent(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const fileContent: string = e.target.result;
      this.processContentAsString(fileContent);
    };
    reader.readAsText(file);
  }

  processContentAsString(content: string) {
    const lines: string[] = content.split('\n');
    const registros: Registro[] = [];
    for (let line of lines) {
      // Dividir la línea en columnas utilizando la tabulación como delimitador
      const columns: string[] = line.split('\t').map(col => col.trim());
      // Crear el objeto Registro a partir de las columnas
      const registro: Registro = {
        area: columns[0],
        numero: columns[1],
        titulo: columns[2],
        expediente: columns[3],
        procedencia: columns[4],
        nInterno: columns[5],
        organizacion: columns[6],
        fecha: columns[7],
        usuario: columns[8],
        adjunto: columns[9],
      };
      // Agregar el registro al array de registros
      registros.push(registro);
    }
    // Emitir los registros procesados
    this.registrosLeidos.emit(registros);
  }

}











// onFileSelected(event: any) {
//   const file: File = event.target.files[0];
//   if (file) {
//     this.readFile(file);
//   }
// }

// readFile(file: File) {
//   const reader = new FileReader();
//   reader.onload = (e: any) => {
//     const fileContent: string = e.target.result;
//     this.processFileContent(fileContent);
//   };
//   reader.readAsText(file);
// }