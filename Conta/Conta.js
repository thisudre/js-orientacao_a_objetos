import { Cliente } from "../Cliente.js";

export class Conta{
    constructor(cliente, agencia, saldoInicial){
        if(this.constructor == Conta){
            throw new Error("Não instanciar classe do tipo Conta!!");
        }

        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = saldoInicial;
    }

    set cliente(cliente){
        if(cliente instanceof Cliente){
            this._cliente = cliente;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        throw new Error("Método abstrato!");
    }
    
    _sacar(valor, taxa){
        if(this._saldo >= valor){
            this._saldo -= valor * taxa;
            return valor;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorTransferencia = this.sacar(valor);
        conta.depositar(valorTransferencia);
    }
}