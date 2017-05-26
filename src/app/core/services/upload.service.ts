import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UploadService {
  progress$: any;
  progressObserver: any;
  progress: number = 0;

  constructor () {
    this.progress$ = Observable.create(observer => {
      this.progressObserver = observer
    }).share();
  }

  getBase64(file: File) {
    const fileReader = new FileReader();
    return new Promise((resolve) => {
      fileReader.addEventListener('load', (e) => resolve((e.target as any).result));
      fileReader.readAsDataURL(file);
    });
  }

  makeFileRequest (url: string = '', params: string[], files: File[]) {
    if (!url.length) {
      throw new Error('Endpoint incorrect!');
    }
    return Observable.create(observer => {
      let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

      for (let i = 0; i < files.length; i++) {
        formData.append("uploads[]", files[i], files[i].name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(JSON.parse(xhr.response));
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };

      xhr.upload.onprogress = (event) => {
        this.progress = Math.round(event.loaded / event.total * 100);

        this.progressObserver.next(this.progress);
      };

      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }

  base64MimeType(encoded) {
    let result = '';

    if (typeof encoded !== 'string') {
      return result;
    }

    const mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);

    if (mime && mime.length) {
      result = mime[1];
    }

    return result;
  }
}
