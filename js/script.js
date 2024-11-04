function enviar(){
    if(document.getElementById("cxnome").value==""){
        alert("Preencha o campo 'nome' corretamente.");
    }
    else if(document.getElementById("cxemail").value==""){
        alert("Preencha o campo 'email' corretamente.");
    }
    else if(document.getElementById("cxsenha").value==""){
        alert("Preencha o campo 'senha' corretamente.");
    }
    else if(document.getElementById("cxsenha2").value=="" || document.getElementById("cxsenha2").value != document.getElementById("cxsenha").value){
        alert("Preencha o campo 'confirmação de senha' corretamente.");
    }
    else if(document.getElementById("cxestcid").value=="padrao2"){
        alert("Selecione o campo 'cidade es' corretamente.");
    }
    else if(document.getElementById("cxgenero").value=="padrao"){
        alert("selecione o campo 'genero' corretamente.");
    }
    else if(document.getElementById("cxdata").value==""){
        alert("Preencha o campo 'data de nascimento' corretamente.");
    }
    else if(document.getElementById("cxdesc").value==""){
        alert("Preencha o campo 'descrição pessoal' corretamente.");
    }
    else{
        alert("Enviado com sucesso!");
        location.reload();
    }
}
