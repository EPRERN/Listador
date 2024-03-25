import { Component } from '@angular/core';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.css']
})
export class FileReaderComponent {

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
    // Aquí procesas el contenido del archivo
    // Por ejemplo, puedes dividir el contenido por líneas y luego por columnas
    const lines: string[] = content.split('\n');
    const registros = [];
    for (let line of lines) {
      const columns: string[] = line.split('|').map(col => col.trim());
      // Aquí podrías convertir las columnas en un objeto Registro o hacer cualquier otro tipo de procesamiento
      // Por ejemplo:
      const registro = {
        Numero: parseInt(columns[0]),
        Titulo: columns[1],
        Expediente: parseInt(columns[2]),
        Procedencia: columns[3],
        NInterno: parseInt(columns[4]),
        NOrga: columns[5],
        Fecha: new Date(columns[6]) // Asegúrate de convertir la fecha correctamente
      };
      registros.push(registro);
    }
    console.log(registros);
  }
}
