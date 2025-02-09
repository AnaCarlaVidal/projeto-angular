import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class AppComponent {
  currentPage: string = 'home';
  previousPage: string = 'home';
  selectedColor: string = '';
  selectedStyle: string = '';
  selectedPrint: string = '';
  cart: any[] = [];

  // Propriedades para criação de conta
  username: string = '';
  email: string = '';
  password: string = '';

  // Propriedades para login
  loginUsername: string = '';
  loginPassword: string = '';
  user: any = null; // Usuário logado
  users: any[] = []; // Lista de usuários cadastrados

  // Navegar entre páginas
  navigateTo(page: string): void {
    this.previousPage = this.currentPage;
    this.currentPage = page;
  }

  // Criar conta
  createAccount(): void {
    console.log('Criando conta com:', this.username, this.email, this.password);

    // Verifica se o nome de usuário já existe
    const existingUser = this.users.find(u => u.username === this.username);
    if (existingUser) {
      alert('Nome de usuário já existe! Escolha outro.');
      return;
    }

    // Adiciona o usuário à lista de cadastrados
    const newUser = {
      username: this.username,
      email: this.email,
      password: this.password
    };
    this.users.push(newUser);

    alert(`Conta criada com sucesso! Bem-vindo, ${this.username}!`);
    this.navigateTo('form'); // Redireciona para a personalização
  }

  // Fazer login
  loginUser(): void {
    console.log('Tentando login com:', this.loginUsername, this.loginPassword);

    // Verifica se existe um usuário com as credenciais fornecidas
    const foundUser = this.users.find(u => u.username === this.loginUsername && u.password === this.loginPassword);

    if (foundUser) {
      this.user = foundUser;
      console.log(`Bem-vindo, ${this.user.username}!`);
      alert(`Bem-vindo, ${this.user.username}!`);
      this.navigateTo('form'); // Redireciona para personalizar o pijama
    } else {
      alert('Nome de usuário ou senha incorretos.');
    }
  }

  // Logout
  logout(): void {
    this.user = null;
    this.navigateTo('home');
  }

  // Submeter formulário de personalização
  submitForm(): void {
    console.log('Formulário enviado:', this.selectedColor, this.selectedStyle, this.selectedPrint);
    this.navigateTo('resultado');
  }

  // Adicionar ao carrinho
  addToCart(): void {
    const product = {
      color: this.selectedColor,
      style: this.selectedStyle,
      print: this.selectedPrint,
    };
    this.cart.push(product);
    console.log('Produto adicionado ao carrinho:', product);
    this.navigateTo('carrinho');
  }

  // Voltar para a página inicial
  goToHome(): void {
    this.navigateTo('home');
  }

  // Retornar para a página anterior
  goBack(): void {
    this.currentPage = this.previousPage;
  }
}
