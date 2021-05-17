var rodada = 1;
var matrizJogo = Array(3);

matrizJogo['a'] = Array(3);
matrizJogo['b'] = Array(3);
matrizJogo['c'] = Array(3);

matrizJogo['a'][1] = 0;
matrizJogo['a'][2] = 0;
matrizJogo['a'][3] = 0;

matrizJogo['b'][1] = 0;
matrizJogo['b'][2] = 0;
matrizJogo['b'][3] = 0;

matrizJogo['c'][1] = 0;
matrizJogo['c'][2] = 0;
matrizJogo['c'][3] = 0;

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
            $('#' + idCampoClicado).off();
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

        var linhaColuna = id.split('-');
        
        matrizJogo[linhaColuna[0]][linhaColuna[1]] = ponto;

        verificaCombinacao();
    }

    function verificaCombinacao(){
        //verifica na horizontal
        var pontos = 0;
        for(var i = 1; i <= 3; i++){
            pontos = pontos + matrizJogo['a'][i];
        }
        ganhador(pontos);

        pontos = 0;
        for(var i = 1; i <= 3; i++){
            pontos = pontos + matrizJogo['b'][i];
        }
        ganhador(pontos);

        pontos = 0;
        for(var i = 1; i <= 3; i++){
            pontos = pontos + matrizJogo['c'][i];
        }
        ganhador(pontos);

        //verifica na vertical
        for(var l = 1; l <=3; l++){
            pontos = 0;
            pontos += matrizJogo['a'][l];
            pontos += matrizJogo['b'][l];
            pontos += matrizJogo['c'][l];
            ganhador(pontos);
        }

        //verificar na diagonal
        pontos = 0;
        pontos = matrizJogo['a'][1] + matrizJogo['b'][2] + matrizJogo['c'][3];
        ganhador(pontos);
        
        pontos = 0;
        pontos = matrizJogo['a'][3] + matrizJogo['b'][2] + matrizJogo['c'][1];
        ganhador(pontos);

    }

    function ganhador(pontos){
        if(pontos == -3){
            var jogada1 = $('#entradaApelidoJogador1').val();
            alert(jogada1 + " é o vencedor!");
            $('.jogada').off();
        }else if(pontos == 3){
            var jogada2 = $('#entradaApelidoJogador2').val();
            alert(jogada2 + " é o vencedor!");
            $('.jogada').off();
        }
    }
});