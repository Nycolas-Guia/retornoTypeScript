namespace empresa{
    export class Funcionario extends Pessoa{
        private valorDia: number;
        private codFuncionario: number;
    
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

        calcularSalario(): number{
            return this.valorDia * 30;
        }
    } 
}