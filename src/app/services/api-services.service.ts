import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KnowledgeResponse } from '../models/knowledgeResponse';
import { debounceTime } from 'rxjs/operators'
import { EmailRequest } from '../models/EmailRequest';
import { StackIds } from '../enums/StackIds';
import { StackResponse } from '../models/StackResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  private baseUrlKnowledge = 'https://webapiknowledge.azurewebsites.net';
  private baseUrlEmail = 'https://webapiemail.azurewebsites.net'
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  getAllKnowledge(): Observable<KnowledgeResponse[]> {
    return this.httpClient.get<KnowledgeResponse[]>(`${this.baseUrlKnowledge}/V2/Knowledge`);
  }

  getKnowledgeByStackId(stackId: StackIds): Observable<KnowledgeResponse[]> {
    return this.httpClient.get<KnowledgeResponse[]>(`${this.baseUrlKnowledge}/V2/Knowledge/ByStackId/${stackId}`);
  }

  getAllStacks(): Observable<StackResponse[]> {
    return this.httpClient.get<StackResponse[]>(`${this.baseUrlKnowledge}/V2/Stack/all`);
  }

  sendEmail(email: EmailRequest): Observable<EmailRequest> {
    return this.httpClient.post<EmailRequest>(`${this.baseUrlEmail}/SendEmail`, JSON.stringify(email), this.httpOptions);
  }
}
