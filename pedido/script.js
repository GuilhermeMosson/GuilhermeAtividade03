function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
    console.log(nome);
    show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    
    if(nome && nome.trim() !== ""){
        div.style.display = "flex";
        document.getElementById("exampleFormControlInput1").style.background = "none";
    }else{
        document.getElementById("error").style.display = "flex";
    }
}

function fechar(){
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background = "lightpink";
}

function calcularTotal(){
    var selectPratos = document.getElementById("selectPrato");
    var selectBebidas = document.getElementById("selectBebida");
    var selectSobremesa = document.getElementById("selectSobremesa");
    var resultadoSpan = document.getElementById("resultado");

    var total = 0;
    var prato = 0;
    var bebida = 0;
    var sobremesa = 0;

    switch (selectPratos.value) {
        case "Prato feito":
            prato = 24.5;
            total = total + prato;
            break;

        case "Strogonoff de Frango":
            prato = 6.9;
            total = total + prato;
            break;
        case "Macarrão carna moída":
            prato = 8.9;
            total = total + prato;
            break;  
    }
    switch (selectBebidas.value) {
        case "Refrigerantes":
            bebida = 24.5;
            total = total + bebida;
            break;

        case "Suco de Laranja":
            bebida = 28.9;
            total = total + bebida;
            break;
        case "Café expresso":
            bebida = 5;
            total = total + bebida;
            break; 
    }
    switch (selectSobremesa.value) {
        case "Fatia Bolo de Cenoura":
            sobremesa = 9.9;
            total = total + sobremesa;
            break;

        case "Brownie com Sorvete":
            sobremesa = 19.9;
            total = total + sobremesa;
            break;
        case "Fatia Cheesecake":
            sobremesa = 15.6;
            total = total + sobremesa;
            break; 
    }

    resultadoSpan.textContent = `R$ ${total.toFixed(2)}`;
    document.getElementById("pratoPronto").innerHTML = prato.toFixed(2);
    document.getElementById("bebidaPronto").innerHTML = bebida.toFixed(2);
    document.getElementById("sobremesaPronto").innerHTML = sobremesa.toFixed(2);

}

const limpar = () => {
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = " ";
    document.getElementById("selectPrato").value = "Abra para selecionar o prato";
    document.getElementById("selectBebida").value = "Abra para selecionar a bebida";
    document.getElementById("selectSobremesa").value = "Abra para selecionar a sobremesa";
    document.getElementById("pratoPronto").textContent = "";
    document.getElementById("bebidaPronto").textContent = "";
    document.getElementById("sobremesaPronto").textContent = "";
    
}