import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent {
  // Recebendo dados do componente anterior
  @Input() selectedColor!: string;
  @Input() selectedStyle!: string;
  @Input() selectedPrint!: string;

  constructor(private router: Router) {}

  // Voltar para a página anterior
  goBack(): void {
    this.router.navigate(['/']); // Volta para a página inicial
  }

  // Finalizar o processo
  concluir(): void {
    alert('Obrigado por utilizar nossa loja!');
    this.router.navigate(['/']); // Pode levar para outra página ou ação
  }
}
