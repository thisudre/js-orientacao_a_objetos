export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if (this.ehAutenticavel){
            return autenticavel.autenticar(senha);
        }
    }

    static ehAutenticavel(autenticavel){
        return ("autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function);
    }
}