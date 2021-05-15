var rodada = 1;
var matrizJogao = Array(3);

$(document).ready(function(){
    $('#btnIniciarJogo').click(function(){
        //valida digitação apelido jogadores
        if($('#entradaApelidoJogador1').val() == ''){
            alert('Apelido do Jogador 1 não preenchido');
            return false;
        }
        if($('#entradaApelidoJogador2').val() == ''){
            alert('Apelido do Jogador 2 não preenchido');
            return false;
        }

        //exibir apelidos
        $('#nomeJogador1').html($('#entradaApelidoJogador1').val());
        $('#nomeJogador2').html($('#entradaApelidoJogador2').val());

        //
        $('#paginaInicial').hide();
        $('#palcoJogo').show();

        $('.jogada').click(function(){
            var idCampoClicado = this.id;
            jogada(idCampoClicado);
        });

    
    });

    function jogada(id){
        var icone = '';
        var ponto = 0;

        if((rodada % 2) == 1){
            icone = 'url("imagens/marcacao_1.png")';
            ponto = -1;
        }else{
            icone = 'url("imagens/marcacao_2.png")';
            ponto = 1;
        }
        rodada++;

        $('#' + id).css('background-image',icone);
    }
});