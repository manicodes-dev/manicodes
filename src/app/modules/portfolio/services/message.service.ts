import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable( { providedIn: 'root' })
export class MessageService {

    constructor(private http: HttpClient){

    }

    sendMessage(request:any){
        return this.http.post(environment.formspreeUrl, request);
    }
}