// 1)
function maiorNum(a, b, c) {
	let r;
	r = a > b && a > c ? a : r;
	r = b > a && b > c ? b : r;
	r = c > b && c > a ? c : r;
	
	return r;
}

// 2)
function cresc(x, y, z) {
	if (x > y) { let temp = x; x = y; y = temp; }
	if (y > z) { let temp = y; y = z; z = temp; }
	if (x > y) { let temp = x; x = y; y = temp; }
	
	return x + ", " + y + ", " + z;
}

// 3)
function palindromo(texto) {
	texto = texto.toUpperCase().trim().replace(/\s+/g, "");
	
	var novoTexto = "";
	for (let i = 0; i < texto.length; i++) {
		novoTexto[i] = texto[texto.length - i];
	}
	
	if (texto == novoTexto) {
		return "É um palindromo";
	} else {
		return "Não é um palindromo";
	}
}

// 4)
function subconj(a, b) {
	a = a.replace(/\s/g, '').toUpperCase();
	b = b.replace(/\s/g, '').toUpperCase();
	
	if (a.length == 0 || b.length == 0) {
		return "erro";
	}
	if (a.includes(b)) {
		return "É um subconjunto";
	} else {
		return "Não é um subconjunto";
	}
}

function diaSemana(data) {
	const dias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  ];

  const [ano, mes, dia] = data.split("-").map(Number);
  const d = new Date(ano, mes - 1, dia);

  return dias[d.getDay()];
}