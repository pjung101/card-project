import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient) { }

    getAllCards(){
        
    }

    getCardTemplate(template_id) {
        return this._http.get('/api/template/' + template_id);
    }
    createTemplate(form_data) {
        return this._http.post('/api/templates/', form_data);
    }
    uploadTemplateFile(file) {
        return this._http.post('/file/upload', file);
    }
}