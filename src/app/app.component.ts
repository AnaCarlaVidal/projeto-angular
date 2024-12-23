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
  currentPage: string = 'home'; // Página atual (home, form, resultado, produto-detalhes)
  previousPage: string = 'home'; // Página anterior para navegação
  selectedColor: string = '';  // Cor escolhida pelo usuário
  selectedStyle: string = '';  // Estilo escolhido pelo usuário
  selectedPrint: string = '';  // Estampa escolhida pelo usuário

  // Navegar entre as páginas
  navigateTo(page: string): void {
    this.previousPage = this.currentPage;  // Armazenar a página atual como a anterior antes de mudar
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

  // Adicionar ao carrinho
  addToCart(): void {
    console.log('Produto adicionado ao carrinho!');
    this.navigateTo('home');  // Retorna para a página inicial após adicionar ao carrinho
  }

  // Retornar para a página inicial
  goToHome(): void {
    this.navigateTo('home');
  }
}
