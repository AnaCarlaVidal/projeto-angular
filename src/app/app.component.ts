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
  currentPage: string = 'home'; // Controla a página atual (home, form, resultado, produto-detalhes)
  selectedColor: string = '';  // Armazena a cor escolhida pelo usuário
  selectedStyle: string = '';  // Armazena o estilo escolhido pelo usuário
  selectedPrint: string = '';  // Armazena o tipo de estampa escolhida pelo usuário

  // Navegar entre as páginas
  navigateTo(page: string): void {
    this.currentPage = page;
  }

  // Submeter o formulário
  submitForm(): void {
    console.log('Formulário enviado com os seguintes dados:');
    console.log('Cor:', this.selectedColor);
    console.log('Estilo:', this.selectedStyle);
    console.log('Estampa:', this.selectedPrint);

    // Navega para a página de resultados
    this.navigateTo('resultado');
  }

  // Ir para a página de detalhes do produto
  goToProductDetail(): void {
    this.navigateTo('produto-detalhes');
  }

  // Adicionar ao carrinho
  addToCart(): void {
    console.log('Produto adicionado ao carrinho!');
    this.navigateTo('home');  // Retorna para a página inicial após adicionar
  }

  // Retornar para a página inicial
  goToHome(): void {
    this.navigateTo('home');
  }
}
