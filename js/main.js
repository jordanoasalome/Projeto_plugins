$(document).ready(function() {
    $('#CPF').mask('000.000.000-00')
    $('#telefone').mask('(00) 0 0000-0000')
    $('#CEP').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            cpf: 'Por favor, insira seu CPF corretamente.',
            email: 'Por favor, insira seu E-mail corretamente.',
            telefone: 'Por favor, insira seu Telefone corretamente.',
            cep: 'Por favor, insira o seu CEP  corretamente.',
            endereco: 'Por favor, insira o seu endereço corretamente.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        },
        errorClass: "error",
        errorElement:"span",
    })
})