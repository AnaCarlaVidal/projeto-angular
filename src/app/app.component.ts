import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importando o CommonModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule] // Inclua o CommonModule aqui
})
export class AppComponent {
  isFormPage = false; // Controla qual página será exibida
  selectedColor = '';
  selectedStyle = '';
  selectedPrint = '';

  // Função para navegar para a página do formulário
  navigateToForm(page: string) {
    console.log(`Navegando para a página: ${page}`);
    this.isFormPage = true;
  }

  // Função para enviar o formulário
  submitForm() {
    console.log('Cor:', this.selectedColor);
    console.log('Estilo:', this.selectedStyle);
    console.log('Estampa:', this.selectedPrint);
  }
}