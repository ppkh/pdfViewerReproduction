import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";

import { AppComponent } from "./app.component";
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';

@NgModule({
  declarations: [AppComponent, ExamplePdfViewerComponent],
  imports: [BrowserModule, NgxExtendedPdfViewerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
