import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WippFrontendLibModule, GenericDataModule, ImagesCollectionModule, 
        CsvCollectionModule, DynamicContentModule, JobModule, NotebookModule, 
        TensorflowModelModule, PluginModule, PyramidModule, PyramidAnnotationModule, 
        PyramidVisualizationModule, StitchingVectorModule, WorkflowModule} from 'wipp-frontend-lib';
import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as config from '../assets/config/config.json';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WippFrontendLibModule.forRoot(environment.apiRootUrl, config),
    DynamicContentModule,
    // JobModule,
    BrowserModule,
    HttpClientModule,
    ImagesCollectionModule,
    StitchingVectorModule,
    PyramidAnnotationModule,
    PyramidModule,
    PyramidVisualizationModule,
    TensorflowModelModule,
    CsvCollectionModule,
    NotebookModule,
    GenericDataModule,
    PluginModule,
    WorkflowModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatCheckboxModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}