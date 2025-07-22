import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common'; // 👈 importar isso!
=======
>>>>>>> 2e9312ba0448fb8ec95f46e26cafe804bd89debe
import { Contato } from './contato';

@Component({
  selector: 'app-adiciona-contato',
<<<<<<< HEAD
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
=======
  imports: [],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.css'
})
export class AdicionaContato {
  contatos: Contato[]

  constructor() {
    this.contatos = []
  }

  adicionar(nm: string, tel:number, em:string, an: string, tipo: string) {
    let aniversario = new Date(an)
    const c = new Contato(nm, tel, em, aniversario, tipo)
  }
}
>>>>>>> 2e9312ba0448fb8ec95f46e26cafe804bd89debe
