import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import * as firebase from 'firebase';

@Component({
  selector: 'file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.scss']
})
export class FileDropComponent {

  public files: NgxFileDropEntry[] = [];
  public urlArray: string[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // console.log(droppedFile.relativePath, file);
          const storageRef = firebase.storage().ref('/zdj/' + file.name);

          storageRef.put(file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            snapshot.ref.getDownloadURL().then((downloadURL: string) => {
              //console.log(downloadURL);
              snapshot.ref.getDownloadURL();
              this.urlArray.push(downloadURL);
              //console.log(this.urlArray);
            });
          });
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public returnUrlArray(){
    console.log("oddaje");
    console.log(this.urlArray);
  }
  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

}
