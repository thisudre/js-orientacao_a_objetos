import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(cliente, 100, 0);
    }

    sacar(valor){
        const taxa = 1.001;
        return this._sacar(valor, taxa);
    }
}