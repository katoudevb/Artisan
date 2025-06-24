import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MailPayload {
  artisanEmail: string;
  name: string;
  subject: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class MailService {
  private apiUrl = 'http://localhost:3000/send-mail'; // adresse du backend

  constructor(private http: HttpClient) {}

  sendMail(payload: MailPayload): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}
