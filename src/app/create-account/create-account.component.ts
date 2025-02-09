import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Para enviar dados para o Django

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  newUser = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post('http://localhost:8000/api/auth/users/', this.newUser).subscribe(response => {
      console.log('Conta criada com sucesso', response);
      // Navegar de volta ou para outra página
    }, error => {
      console.error('Erro ao criar conta', error);
    });
  }

  goToHome() {
    // Lógica para voltar à página inicial
  }
}
