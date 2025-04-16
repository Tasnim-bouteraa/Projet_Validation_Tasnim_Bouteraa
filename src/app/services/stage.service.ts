import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stage } from '../models/stage.model';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  private apiUrl = 'http://localhost:3000/stages';
  constructor(private http: HttpClient) { }
  getStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>(this.apiUrl);
  }
  getStage(id: number): Observable<Stage> {
    return this.http.get<Stage>(`${this.apiUrl}/${id}`);
  }
  addStage(stage: Stage): Observable<Stage> {
    return this.http.post<Stage>(this.apiUrl, stage);
  }
  deleteStage(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
