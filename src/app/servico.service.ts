import { Injectable } from '@angular/core';

@Injectable()
export class ServicoService {
  private logs: string[];
  constructor() {
    this.reset();
  }
  append(tecla): void {
    this.logs.push(tecla);
  }
  reset(): void {
    this.logs = [];
  }
}