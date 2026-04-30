// Referência aos forms
const first_form = document.getElementById('first-form');
const second_form = document.getElementById('second-form');

// 1)
function viewArray(num1, num2, num3) {
    let array = [num1, num2, num3];
    
    var soma = 0;
    
    array.forEach(el => {
        soma += el;
    });
    
    return "A soma dos três números é " + soma + ", o quadrado do primeiro é " + (array[0] * array[0]) + " e o quadrado do segundo é " + (array[1] * array[1]);
}

// 2)
function palavras(l1, l2, l3, l4, l5) {
    let letras = [l1, l2, l3, l4, l5];
    const resultados = [];

    function permutar(arr, atual = []) {
        if (resultados.length >= 10) return;

        if (arr.length === 0) {
            resultados.push(atual.join(""));
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            const novaArr = [...arr];
            const letra = novaArr.splice(i, 1);

            permutar(novaArr, atual.concat(letra));

            if (resultados.length >= 10) break;
        }
    }

    permutar(letras);
    return resultados;
}

first_form.addEventListener('submit', async (event) => {
  event.preventDefault();

  alert(viewArray.apply(null, [
    parseInt(first_form.num1.value),
    parseInt(first_form.num2.value),
    parseInt(first_form.num3.value)]));

  first_form.reset();
});

second_form.addEventListener('submit', async (event) => {
  event.preventDefault();

  alert(palavras.apply(null, [
    second_form.l1.value,
    second_form.l2.value,
    second_form.l3.value,
    second_form.l4.value,
    second_form.l5.value]));

  second_form.reset();
});
