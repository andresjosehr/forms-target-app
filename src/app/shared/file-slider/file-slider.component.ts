import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-file-slider',
  templateUrl: './file-slider.component.html'
})
export class FileSliderComponent {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    }


    previousImage() {
        if (this.data.index > 0) {
          this.data.index--;
        }else{
            this.data.index = this.data.files.length - 1;
        }
      }

      nextImage() {
        if (this.data.index < this.data.files.length - 1) {
          this.data.index++;
        } else{
            this.data.index = 0;
        }
      }

      isImage(entension: string): boolean {
        return ['png', 'jpg', 'jpeg'].includes(entension);
    }



    downloadFile(file: any) {
        const byteCharacters = atob(file.fileBase64.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray]);
        saveAs(blob, file.name);
      }
}
