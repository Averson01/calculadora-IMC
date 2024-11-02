const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
 /* aqui estamos a dizer para pegar o elemento cujo o id é ... */

 function imc(){

    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if(nome !== '' && altura !== '' && peso !==''){

        const valorIMC =(peso / (altura*altura)).toFixed(1)/* usamos o toFixed para arrendondar por 1casa dps do ponto */


        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso';
        } else if(valorIMC <25){
            classificacao = 'com peso ideal. Parabéns!!!!';
        }else if(valorIMC <30){
            classificacao = 'levemente acima do peso.';
        }else if(valorIMC <35){
            classificacao = 'com obesidade grau 1';
        }else if(valorIMC <40){
            classificacao = 'com obesidade grau 2';
        }else{
            classificacao='com obesidade grau 3. Cuidado!!'
        }
        resultado.textContent= `${nome} seu IMC é ${valorIMC} e voce está ${classificacao}` ;
    }else{
        resultado.textContent='preencha todos os campos!!!'
    }

 }
 calcular.addEventListener("click", imc);
 /* estamos a referir que a propriedade calcular tem que prestar atençao ou escutar quando alguem clicar, e quando alguem clicar o calcular tem que executar a funcao imc */