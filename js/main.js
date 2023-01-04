


function consultaCep(){
    var cep = $("#cep").val()
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    console.log(url)

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            if(response.erro == true){
                $("#logradouro").html("CEP NÃO ENCONTRADO")
                $("#bairro").html("")
                $("#localidade").html("")
                $("#uf").html("")
            }else{console.log(response)
                $("#logradouro").html(`Logradouro: ${response.logradouro}`)
                $("#bairro").html(`Bairro: ${response.bairro}`)
                $("#localidade").html(`Cidade: ${response.localidade}`)
                $("#uf").html(`Estado: ${response.uf}`)
            }
            
        }
    })
}