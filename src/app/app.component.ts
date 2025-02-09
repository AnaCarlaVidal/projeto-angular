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
  currentPage: string = 'home'; // Página atual
  previousPage: string = 'home'; // Página anterior
  selectedColor: string = '';  // Cor escolhida
  selectedStyle: string = '';  // Estilo escolhido
  selectedPrint: string = '';  // Estampa escolhida
  cart: any[] = []; // Array para armazenar os produtos adicionados ao carrinho

  // Propriedades para criação de conta
  username: string = '';
  email: string = '';
  password: string = '';

  // Navegar entre páginas
  navigateTo(page: string): void {
    this.previousPage = this.currentPage; // Armazena a página atual como anterior
    this.currentPage = page;
  }

  // Submeter formulário para criação de conta
  createAccount(): void {
    console.log('Criando conta com:');
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Lógica para criar conta - pode ser uma requisição API, por exemplo
    this.navigateTo('resultado'); // Navega para a página de resultado após criar a conta
  }

  // Submeter formulário de seleção de produtos
  submitForm(): void {
    console.log('Formulário enviado:');
    console.log('Cor:', this.selectedColor);
    console.log('Estilo:', this.selectedStyle);
    console.log('Estampa:', this.selectedPrint);

    this.navigateTo('resultado');
  }

  // Adicionar ao carrinho
  addToCart(): void {
    const product = {
      color: this.selectedColor,
      style: this.selectedStyle,
      print: this.selectedPrint,
    };
    this.cart.push(product); // Adiciona o produto ao carrinho
    console.log('Produto adicionado ao carrinho:', product);

    // Navegar para a página do carrinho
    this.navigateTo('carrinho');
  }

  // Retornar para a página inicial
  goToHome(): void {
    this.navigateTo('home');
  }
}
