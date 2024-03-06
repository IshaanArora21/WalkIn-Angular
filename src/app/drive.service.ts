import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class DriveService {
  private apiUrl = 'http://localhost:5000/graphql'; 

  constructor(private http: HttpClient) { }

  fetchData(query: string, variables: any): Observable<any> {
    const body = {
      query: query,
      variables: variables
    };

    return this.http.post<any>(this.apiUrl, body);
  }
}
