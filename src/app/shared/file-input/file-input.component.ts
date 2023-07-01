import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FileSliderComponent } from '../file-slider/file-slider.component';

@Component({
    selector: 'file-input',
    templateUrl: './file-input.component.html',
    styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent implements OnInit {

    @ViewChild('fileInput') fileInput: HTMLInputElement;
    @Input() files: FormControl;
    @Input() label: string;

    constructor(
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {}

    selectFile(event: Event): void {
        const target = event.target as HTMLInputElement;
        const f = [];
        Object.values(target.files).forEach(async (file: File) => {
            f.push({
                name: file.name,
                type: file.name.split('.').pop(),
                fileBase64: await this.fileToBase64(file),
            });
        });
        this.files.setValue(f);
    }

    removeFile(index): void {
        const files = this.files.value;
        files.splice(index, 1);
        this.files.setValue(files);
    }

    fileToBase64(file: File): Promise<string> {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result.toString());
            };
        });
    }

    isImage(entension: string): boolean {
        return ['png', 'jpg', 'jpeg'].includes(entension);
    }

    openDialog(files, index): void {
        this.dialog.open(FileSliderComponent, {
          data: {
            files,
            index,
          },
        });
      }
}
