function enviar(){
    if(document.getElementById("cxnome").value==""){
        alert("Preencha o campo 'Nome Completo' corretamente.");
    }
    else if(document.getElementById("cxemail").value==""){
        alert("Preencha o campo 'E-mail' corretamente.");
    }
    else if(document.getElementById("cxsenha").value==""){
        alert("Preencha o campo 'Senha' corretamente.");
    }
    else if(document.getElementById("cxsenha2").value=="" || document.getElementById("cxsenha2").value != document.getElementById("cxsenha").value){
        alert("Campo 'Confirmação Senha' não foi preenchido corretamente.");
    }
    else if(document.getElementById("cxestcid").value=="padrao2"){
        alert("Selecione o campo 'Cidade - Estado' corretamente.");
    }
    else if(document.getElementById("cxgenero").value=="padrao"){
        alert("Selecione o campo 'Gênero' corretamente.");
    }
    else if(document.getElementById("cxdata").value==""){
        alert("Preencha o campo 'Data de Nascimento' corretamente.");
    }
    else if(document.getElementById("cxdesc").value==""){
        alert("Preencha o campo 'Descrição Pessoal' corretamente.");
    }
    else{
        alert("Enviado com sucesso!");
        location.reload();
    }
}
