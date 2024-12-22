import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  response: any = null;
  tipo: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Capturando o tipo de navegação (anônimo ou criar conta)
    this.route.queryParams.subscribe(params => {
      this.tipo = params['tipo'];
    });
  }

  onSubmit() {
    // Coletando as preferências do formulário
    const cores = (document.getElementById('cores') as HTMLSelectElement).value;
    const estilos = (document.getElementById('estilos') as HTMLSelectElement).value;
    const estampas = (document.getElementById('estampas') as HTMLSelectElement).value;

    // Exibindo as preferências escolhidas
    this.response = {
      cores,
      estilos,
      estampas
    };

    // Aqui, podemos adicionar lógica adicional, como salvar os dados em um banco de dados ou exibir sugestões.
  }
}
