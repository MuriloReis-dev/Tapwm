function media() {
	let nome = prompt("Digite o Nome:");
	let nota1 = parseFloat(prompt("Primeira nota:"));
	let nota2 = parseFloat(prompt("Segunda nota:"));
	let nota3 = parseFloat(prompt("Terceira nota:"));
	
	let media = (nota1 + nota2 + nota3) / 3
	
	alert("A média do aluno " + nome + " é " + media.toFixed(2));
}

function operacoes() {
	let num1 = parseInt(prompt("Primeiro número: "));
	let num2 = parseInt(prompt("Segundo número: "));
	
	alert(num1 + " - " + num2 + " = " + (num1-num2));
	alert(num1 + " x " + num2 + " = " + (num1*num2));
	alert(num1 + " / " + num2 + " = " + (num1/num2));
	alert(num1 + " % " + num2 + " = " + (num1%num2));
}