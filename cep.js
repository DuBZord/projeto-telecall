function buscaCep() {
    let TxtCep = document.getElementById('TxtCep').value;
    if (TxtCep === "") {
        // Caso o campo de CEP esteja vazio, desabilita os campos e retorna
        document.getElementById("TxtRua").disabled = true;
        document.getElementById("TxtBairro").disabled = true;
        document.getElementById("TxtCidade").disabled = true;
        document.getElementById("TxtEstado").disabled = true;
        return;
    }

    let cep = TxtCep.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cep.length !== 8) {
        // Caso o CEP não tenha 8 dígitos, exibe mensagem de erro e desabilita os campos
        document.getElementById("cepvalido-error").textContent = "CEP inválido";
        document.getElementById("cepvalido-success").textContent = "";
        document.getElementById("TxtRua").disabled = true;
        document.getElementById("TxtBairro").disabled = true;
        document.getElementById("TxtCidade").disabled = true;
        document.getElementById("TxtEstado").disabled = true;
        return;
    }

    let url = "https://viacep.com.br/ws/" + cep + "/json/";

    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();

    req.onload = function() {
        if (req.status === 200) {
            let endereco = JSON.parse(req.response);
            document.getElementById("TxtRua").value = endereco.logradouro;
            document.getElementById("TxtBairro").value = endereco.bairro;
            document.getElementById("TxtCidade").value = endereco.localidade;
            document.getElementById("TxtEstado").value = endereco.uf;

            document.getElementById("cepvalido-error").textContent = "";
            document.getElementById("cepvalido-success").textContent = "CEP válido";

            // Desabilita os campos após o preenchimento
            document.getElementById("TxtRua").disabled = true;
            document.getElementById("TxtBairro").disabled = true;
            document.getElementById("TxtCidade").disabled = true;
            document.getElementById("TxtEstado").disabled = true;
        } else {
            document.getElementById("cepvalido-error").textContent = "CEP inválido ou não encontrado";
            document.getElementById("cepvalido-success").textContent = "";
            document.getElementById("TxtRua").disabled = true;
            document.getElementById("TxtBairro").disabled = true;
            document.getElementById("TxtCidade").disabled = true;
            document.getElementById("TxtEstado").disabled = true;
        }
    };
}

window.onload = function() {
    // Desabilita os campos ao carregar a página
    document.getElementById("TxtRua").disabled = true;
    document.getElementById("TxtBairro").disabled = true;
    document.getElementById("TxtCidade").disabled = true;
    document.getElementById("TxtEstado").disabled = true;

    let TxtCep = document.getElementById("TxtCep");
    TxtCep.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (this.value.length === 8) {
            // Habilita os campos quando o CEP tem 8 dígitos
            document.getElementById("TxtRua").disabled = false;
            document.getElementById("TxtBairro").disabled = false;
            document.getElementById("TxtCidade").disabled = false;
            document.getElementById("TxtEstado").disabled = false;
        } else {
            // Desabilita os campos caso o CEP seja apagado ou tenha menos de 8 dígitos
            document.getElementById("TxtRua").disabled = true;
            document.getElementById("TxtBairro").disabled = true;
            document.getElementById("TxtCidade").disabled = true;
            document.getElementById("TxtEstado").disabled = true;
        }
    });
    TxtCep.addEventListener("blur", buscaCep);
};
