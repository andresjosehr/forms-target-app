import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSliderComponent } from './file-slider.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    FileSliderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FileSliderComponent
    ]
})
export class FileSliderModule { }
