import { Component } from '@angular/core';
import { ServicoService } from './servico.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private teclas: string[] = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    '.', '0', '%', '/'
  ];
  private display: string;
  constructor(
    private servico: ServicoService) {
    this.ce();
  }
  addDigito(digito) {
    try {
      /* evitar Octal literals */
      if (Number(this.display) != 0) {
        this.display += digito;
      }
      else {
        this.display = digito;
      }
    } catch (e) {
      this.display = digito;
      console.log(e.message);
    }
    this.servico.append(
      "<" + digito + ">");
  }
  ce(): void {
    this.display = "";
    this.servico.append("<CE>");
  }
  calcular(): void {
    try {
      let r = eval(this.display);
      if (!isNaN(r)) {
        this.display = r;
      }
    } catch (e) {
      console.log(e.message);
    }
    this.servico.append("<=>");
  }
  isNumber(digito): boolean {
    return !isNaN(Number(digito)) ||
      digito == '.';
  }
}
