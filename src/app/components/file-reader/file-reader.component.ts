import { Component, EventEmitter, Output } from '@angular/core';
import { Registro } from 'src/app/interface/registro.interface';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.css']
})
export class FileReaderComponent {
  @Output() registrosLeidos = new EventEmitter<Registro[]>();

  constructor() { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.readFile(file);
    }
  }

  readFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const fileContent: string = e.target.result;
      this.processFileContent(fileContent);
    };
    reader.readAsText(file);
  }




  processFileContent(content: string) {
    const lines: string[] = content.split('\n');
    const registros: Registro[] = [];
    for (let line of lines) {
      const columns: string[] = line.split('|').map(col => col.trim());
      console.log('Columns:', columns); // Verifica cómo se dividen las columnas
      const registro: Registro = {
        area: '', // Agrega un valor para 'area'
        numero: parseInt(columns[0]),
        titulo: columns[1],
        expediente: parseInt(columns[2]),
        procedencia: columns[3],
        nInterno: parseInt(columns[4]),
        organizacion: columns[5],
        fecha: columns[6],
        usuario: columns[7],
        adjunto: columns[8],
      };
      console.log('Registro:', registro); // Verifica el objeto de registro creado
      registros.push(registro);
    }
    console.log('Registros:', registros); // Verifica el array de registros
    this.registrosLeidos.emit(registros);
  }
  
  
}
