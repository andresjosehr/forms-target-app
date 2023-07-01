import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputComponent } from './file-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FileSliderModule } from '../file-slider/file-slider.module';




@NgModule({
  declarations: [
    FileInputComponent
  ],
  imports: [
    CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatButtonModule,
        MatIconModule,
        MatDialogModule,
        FileSliderModule
  ],
	exports: [
		FileInputComponent
	]
})
export class FileInputModule { }
