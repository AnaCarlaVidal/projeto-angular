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
  isFormPage = false; // Controla se está na página do formulário ou na inicial
  selectedColor = ''; // Armazena a cor escolhida pelo usuário
  selectedStyle = ''; // Armazena o estilo escolhido pelo usuário
  selectedPrint = ''; // Armazena o tipo de estampa escolhida pelo usuário

  navigateToForm(page: string): void {
    console.log(`Navegando para a página: ${page}`);
    this.isFormPage = true; // Alterna para a página do formulário
  }

  submitForm(): void {
    console.log('Formulário enviado com os seguintes dados:');
    console.log('Cor:', this.selectedColor);
    console.log('Estilo:', this.selectedStyle);
    console.log('Estampa:', this.selectedPrint);

    // Aqui você pode adicionar lógica adicional, como enviar os dados para um servidor
  }
  // Voltar para a página inicial
  goToHome(): void {
    this.isFormPage = false; // Retorna para a página inicial
  }
}
