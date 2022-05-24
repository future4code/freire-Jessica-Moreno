
``` javaScript
    function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
        let valorPorCarro = valorTotalVendas/qtdeCarrosVendidos
        const salario = 2000
        let comissao =(valorPorCarro * 0.05) + 100
        let comissaTotal = comissao * qtdeCarrosVendidos
        let salarioFinal = salario + comissaTotal
        if (qtdeCarrosVendidos === 0) {
            return salario
        }else {
            return salarioFinal
        }
    }
``` 

