import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 importar isso!
import { Contato } from './contato';

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.css',
  imports: [CommonModule] 
})
export class AdicionaContato {
  contatos: Contato[];

  constructor() {
    this.contatos = [];
  }

  adicionar(nm: string, tel: number, em: string, an: string, tipo: string) {
    let aniversario = new Date(an);
    const c = new Contato(nm, tel, em, aniversario, tipo);
    this.contatos.push(c);
  }
}
