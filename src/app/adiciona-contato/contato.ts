export class Contato {
    nome: string
    telefone: number
    email: string
    aniversario: Date
    tipo: string

    constructor(nm: string, tel: number, em:string, an: Date, tp: string) {
        this.nome = nm
        this.telefone = tel
        this.email = em
        this.aniversario = an
        this.tipo = tp
    }
}