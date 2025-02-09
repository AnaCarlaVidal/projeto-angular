import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api/register/'; // URL do seu backend

  constructor(private http: HttpClient) { }

  // Método para registrar o usuário
  registerUser(username: string, email: string, password: string): Observable<any> {
    const user = { username, email, password };

    return this.http.post<any>(this.apiUrl, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
