function exercicio6(a: number, b:number): void{

    const soma: number = a + b;
    const subtracao: number = a -b;
    const multiplicacao: number = a * b;
  
    console.log(soma);
    console.log(subtracao);
    console.log(multiplicacao);
    
    if(a > b){ 
        console.log(a)
    }else {
        console.log(b);
        
    }  
       
}

console.log(exercicio6(5, 7));
