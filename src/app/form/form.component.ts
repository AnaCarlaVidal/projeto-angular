// form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // Variável para armazenar o título dinamicamente
  title: string = 'Escolha seu estilo de pijama';

  // Variáveis para o formulário
  response: any;

  onSubmit() {
    // Lógica para tratar o envio do formulário
  }
}
