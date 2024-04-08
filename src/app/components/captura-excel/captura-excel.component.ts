import { Component } from '@angular/core';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-captura-excel',
  templateUrl: './captura-excel.component.html',
  styleUrls: ['./captura-excel.component.css']
})
export class CapturaExcelComponent {
  data: any[] = [];
  headers: string[] = [];

  etiquetas: string[] = []; // Array para almacenar las etiquetas

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const workbook = XLSX.read(e.target.result, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      this.data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      if (this.data.length > 0) {
        this.headers = this.data.shift(); // Remove headers from data
      }
    };
    reader.readAsBinaryString(file);

    this.etiquetas = new Array(this.data.length).fill('');
  }
}
