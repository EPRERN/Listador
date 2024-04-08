import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table'; 
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileReaderComponent } from './components/file-reader/file-reader.component';



import { NgxFileDropModule } from 'ngx-file-drop';
import { CapturaExcelComponent } from './components/captura-excel/captura-excel.component';
import { CapturaTxtComponent } from './components/captura-txt/captura-txt.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    FileReaderComponent,
    CapturaExcelComponent,
    CapturaTxtComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgxFileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
