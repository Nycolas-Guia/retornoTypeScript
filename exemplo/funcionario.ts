namespace empresa{
    export class Funcionario extends Pessoa{
        private valorDia: number|undefined;
        private codFuncionario: number|undefined;

        constructor(nome:string, cpf:string, cod:number){
        super(nome,cpf);
        this.codFuncionario = cod;
    }

        getValorDia():number|undefined{
            return this.valorDia;
        }

        setValorDia(valorDia:number):void{
            this.valorDia = valorDia;
        }

        getCodFuncionario():number|undefined{
            return this.codFuncionario;
        }

        setCodFuncionario(codFuncionario:number):void{
            this.codFuncionario = codFuncionario;
        }
    } 
}