var caixaEntrada = document.querySelector(".entrada-texto");
var caixaSaida = document.querySelector(".saida-texto");


function encriptarTexto(mensagemEncriptada){
	
	mensagemEncriptada = mensagemEncriptada.toLowerCase(); //Apenas transforma tudo em letra minúscula...

	mensagemEncriptada = mensagemEncriptada.replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'as')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');

	return mensagemEncriptada;
}

function exibeMensagem(){

	var textoEncriptado = encriptarTexto(caixaEntrada.value);
	caixaSaida.value = textoEncriptado;
	caixaSaida.classList.add("semImagem");
	caixaEntrada.focus();

	return caixaSaida.value;
}

function desencriptarTexto(mensagemDesencriptada){
	
	mensagemDesencriptada = mensagemDesencriptada.toLowerCase(); //Apenas transforma tudo em letra minúscula...

	mensagemDesencriptada = mensagemDesencriptada.replaceAll("as", "a")
	.replaceAll("enter", "e")
	.replaceAll("imes", "i")
	.replaceAll("ober", "o")
	.replaceAll("ufat", "u");

	return mensagemDesencriptada;
}

function exibeDesencriptado(){

	var textoDesencriptado = desencriptarTexto(caixaEntrada.value);
	caixaSaida.value = textoDesencriptado;
	caixaSaida.classList.add("semImagem");
	caixaEntrada.focus();

	return caixaSaida.value;
}

function limparTexto(){
	caixaEntrada.value = "";
	caixaSaida.value = "";
	caixaEntrada.focus();
}

function copiarTexto(){
	let textCopy = caixaSaida;
	textCopy.select();
    textCopy.setSelectionRange(0, 99999);

	navigator.clipboard.writeText(textCopy.value);

    alert("Texto Copiado!");
}

