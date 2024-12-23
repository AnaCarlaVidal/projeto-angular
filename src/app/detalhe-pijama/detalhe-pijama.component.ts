import { Component } from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './detalhe-pijama.component.html',
  styleUrls: ['./detalhe-pijama.component.css']
})
export class ResultPageComponent {

  // Controla qual página está visível
  showResultPage = true;

  // Vai para a página de detalhes do produto
  goToProductDetail() {
    this.showResultPage = false;
  }

  // Adiciona o produto ao carrinho (a lógica pode ser mais complexa)
  addToCart() {
    console.log('Produto adicionado ao carrinho!');
    // Lógica de adicionar ao carrinho
  }

  // Volta para a página de resultados
  goBack() {
    this.showResultPage = true;
  }
}
