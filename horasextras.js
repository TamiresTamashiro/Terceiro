class Calcular {

    constructor(horaNormal, horas, diasTrabalhados) {
        
        this.horaNormal      = horaNormal;
        this.horas           = horas;
        this.diasTrabalhados = diasTrabalhados;
    }

    totaldeHEx() {
        return (this.horaNormal * 1.25) * this.horas

    }

    salario() {
        return (this.horaNormal * 8) * this.diasTrabalhados
    }


    salarioMensal() {
        return this.salario() + this.totaldeHEx()
    }
}


    



   